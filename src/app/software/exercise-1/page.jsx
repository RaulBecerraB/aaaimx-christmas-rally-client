'use client'
import { useState, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import CheckButton from '../../components/CheckButton'
import { Box, Paper, Typography, Grid, Alert, Backdrop } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const HtmlPuzzle = () => {
    const theme = useTheme()
    const [pieces, setPieces] = useState([
        { id: 'header', label: '<header>', color: '#dbeafe' },
        { id: 'nav', label: '<nav>', color: '#fce7f3' },
        { id: 'section', label: '<section>', color: '#d1fae5' },
        { id: 'aside', label: '<aside>', color: '#fee2e2' },
        { id: 'footer', label: '<footer>', color: '#f0fdf4' },
    ])

    const [placedPieces, setPlacedPieces] = useState({})
    const [draggedPiece, setDraggedPiece] = useState(null)
    const [isComplete, setIsComplete] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [shakeScreen, setShakeScreen] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
    const touchDragRef = useRef({ isDragging: false, currentPiece: null, fromArea: null, startX: 0, startY: 0, currentTarget: null, dropTarget: null })
    const elementsRef = useRef({})

    useEffect(() => {
        const updateDimensions = () => {
            if (typeof window !== 'undefined') setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
        }
        updateDimensions()
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateDimensions)
            return () => window.removeEventListener('resize', updateDimensions)
        }
    }, [])

    useEffect(() => {
        if (hasError) {
            setShakeScreen(true)
            const timer = setTimeout(() => setShakeScreen(false), 800)
            return () => clearTimeout(timer)
        }
    }, [hasError])

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const origHTML = document.documentElement.style.overflow
            const origBody = document.body.style.overflow
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
            return () => {
                document.documentElement.style.overflow = origHTML
                document.body.style.overflow = origBody
            }
        }
    }, [])

    const processDrop = (targetId) => {
        if (!draggedPiece) return
        if (draggedPiece.fromArea && targetId === 'available') {
            setPlacedPieces((p) => { const n = { ...p }; delete n[draggedPiece.fromArea]; return n })
        } else if (draggedPiece.fromArea) {
            setPlacedPieces((p) => { const n = { ...p }; delete n[draggedPiece.fromArea]; return { ...n, [targetId]: draggedPiece } })
        } else if (targetId !== 'available') {
            setPlacedPieces((p) => ({ ...p, [targetId]: draggedPiece }))
        }
        setShowMessage(false)
        setDraggedPiece(null)
    }

    const handleTouchStart = (e, piece, fromArea = null) => {
        e.preventDefault()
        const touch = e.touches[0]
        touchDragRef.current = { isDragging: true, currentPiece: piece, fromArea, startX: touch.clientX, startY: touch.clientY, currentTarget: e.currentTarget, dropTarget: null }
        e.currentTarget.style.opacity = '0.6'
        e.currentTarget.style.zIndex = '1000'
        setDraggedPiece({ ...piece, fromArea })
    }

    const handleTouchMove = (e) => {
        if (!touchDragRef.current.isDragging) return
        const touch = e.touches[0]
        const { currentTarget, startX, startY } = touchDragRef.current
        const offsetX = touch.clientX - startX
        const offsetY = touch.clientY - startY
        if (currentTarget) currentTarget.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        const elementsUnderTouch = document.elementsFromPoint(touch.clientX, touch.clientY)
        const dropArea = elementsUnderTouch.find((el) => el.getAttribute('data-drop-area'))
        touchDragRef.current.dropTarget = dropArea ? dropArea.getAttribute('data-drop-area') : null
    }

    const handleTouchEnd = () => {
        if (!touchDragRef.current.isDragging) return
        const { currentTarget, dropTarget } = touchDragRef.current
        if (currentTarget) {
            currentTarget.style.opacity = '1'
            currentTarget.style.transform = 'translate(0, 0)'
            currentTarget.style.zIndex = 'auto'
        }
        if (dropTarget) processDrop(dropTarget)
        touchDragRef.current = { isDragging: false, currentPiece: null, fromArea: null, startX: 0, startY: 0, currentTarget: null, dropTarget: null }
    }

    const checkPuzzle = () => {
        const allAreas = ['header', 'nav', 'section', 'aside', 'footer'].every((a) => a in placedPieces)
        const allCorrect = Object.entries(placedPieces).every(([id, p]) => p.id === id)
        const isCorrect = allAreas && allCorrect
        setIsComplete(isCorrect)
        setHasError(!isCorrect)
        setShowMessage(true)
        if (!isCorrect) {
            setShakeScreen(true)
            setTimeout(() => setShakeScreen(false), 800)
        }
    }

    const renderPlacedPiece = (areaId, height) => {
        const piece = placedPieces[areaId]
        const bgColor = piece ? piece.color : '#e5e7eb'
        return (
            <Box key={areaId} data-drop-area={areaId} onDrop={(e) => { e.preventDefault(); processDrop(areaId) }} onDragOver={(e) => e.preventDefault()} sx={{ height, backgroundColor: bgColor, borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: piece ? 'move' : 'default', transition: 'background-color 0.2s' }} ref={(el) => (elementsRef.current[`drop_${areaId}`] = el)}>
                {piece ? (
                    <Box draggable onDragStart={(e) => setDraggedPiece({ ...piece, fromArea: areaId })} onTouchStart={(e) => handleTouchStart(e, piece, areaId)} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'move', userSelect: 'none' }} ref={(el) => (elementsRef.current[`piece_${piece.id}_${areaId}`] = el)}>
                        <Typography>{piece.label}</Typography>
                    </Box>
                ) : (
                    <Typography sx={{ color: '#999' }}>?</Typography>
                )}
            </Box>
        )
    }

    return (
        <Box sx={{ userSelect: 'none', p: 2, overflow: 'hidden', animation: shakeScreen ? 'shake 0.8s cubic-bezier(.36,.07,.19,.97) both' : 'none' }}>
            {isComplete && (
                <>
                    <Backdrop sx={{ zIndex: 10 }} open={true}>
                        <Box sx={{ backgroundColor: 'white', borderRadius: 3, boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)', p: 4, textAlign: 'center', maxWidth: '28rem', animation: 'bounce-slow 3s infinite' }}>
                            <Typography variant="h2" sx={{ color: theme.palette.primary.main, mb: 2, fontWeight: 'bold' }}>¡FELICIDADES!</Typography>
                            <Typography>Has completado correctamente el puzzle de HTML Semántico</Typography>
                        </Box>
                    </Backdrop>
                    <Confetti width={windowDimensions.width} height={windowDimensions.height} recycle={false} numberOfPieces={500} gravity={0.15} style={{ position: 'fixed', top: 0, left: 0, zIndex: 20 }} />
                </>
            )}
            <Box sx={{ maxWidth: '56rem', mx: 'auto', pb: 4, filter: isComplete ? 'blur(4px)' : 'none' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', color: theme.palette.text.primary, mb: 2, fontWeight: 'bold' }}>HTML Semántico Puzzle</Typography>
                {showMessage && <Alert severity={isComplete ? 'success' : hasError ? 'error' : 'info'} sx={{ mb: 2 }}>{isComplete ? '¡Felicitaciones! Has completado correctamente.' : hasError ? 'Hay un error. Revisa la posición de los elementos.' : 'Arrastra cada elemento a su lugar.'}</Alert>}
                {!showMessage && <Alert severity="info" sx={{ mb: 2 }}>Arrastra cada elemento a su posición correcta.</Alert>}
                <Grid container spacing={2} sx={{ display: 'flex', gap: 2 }}>
                    <Grid sx={{ flex: '0 0 200px', minWidth: 0 }}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '28rem', backgroundColor: '#f5f5f5' }} data-drop-area="available" onDrop={(e) => { e.preventDefault(); processDrop('available') }} onDragOver={(e) => e.preventDefault()} ref={(el) => (elementsRef.current['drop_available'] = el)}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>Piezas disponibles</Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2, flexGrow: 1, overflowY: 'auto' }}>
                                {pieces.filter((p) => !Object.values(placedPieces).some((placed) => placed.id === p.id)).map((p) => (
                                    <Paper key={p.id} draggable onDragStart={() => setDraggedPiece(p)} onTouchStart={(e) => handleTouchStart(e, p)} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} sx={{ backgroundColor: p.color, p: 1, textAlign: 'center', cursor: 'move', userSelect: 'none', transition: 'all 0.2s', '&:hover': { boxShadow: 3, transform: 'translateY(-2px)' } }} ref={(el) => (elementsRef.current[`piece_${p.id}`] = el)}>
                                        <Typography variant="body2">{p.label}</Typography>
                                    </Paper>
                                ))}
                            </Box>
                            <CheckButton onClick={checkPuzzle} isComplete={isComplete} />
                        </Paper>
                    </Grid>
                    <Grid sx={{ flex: '1 1 auto', minWidth: 0 }}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '28rem', backgroundColor: '#f9f9f9' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexGrow: 1 }}>
                                {/* Header */}
                                <Box>{renderPlacedPiece('header', '4rem')}</Box>

                                {/* Nav */}
                                <Box>{renderPlacedPiece('nav', '3.5rem')}</Box>

                                {/* Main Content - Section and Aside */}
                                <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2, flexGrow: 1 }}>
                                    {renderPlacedPiece('section', '100%')}
                                    {renderPlacedPiece('aside', '100%')}
                                </Box>

                                {/* Footer */}
                                <Box>{renderPlacedPiece('footer', '4rem')}</Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default HtmlPuzzle
