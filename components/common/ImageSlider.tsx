import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Media, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { H3Text } from 'components/common/Text'

const IMAGE_SIZE = 120
const ARROW_SIZE = 24

export const ImageSlider: React.FC<{
  isOpen: boolean
  images: string[]
  index: number
  onClose: () => void
}> = ({ isOpen, images, index, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(index)

  useEffect(() => {
    if (!isOpen) return
    document
      .querySelector('meta[name="viewport"]')
      ?.setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=10.0, minimum-scale=1, user-scalable=10, viewport-fit=cover',
      )
    return () => {
      document
        .querySelector('meta[name="viewport"]')
        ?.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0, viewport-fit=cover',
        )
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(index)
  }, [index])

  if (!isOpen) return null

  const handlePrev = () => {
    if (selectedIndex === 0) return setSelectedIndex(images.length - 1)
    setSelectedIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    if (images.length === selectedIndex + 1) return setSelectedIndex(0)
    setSelectedIndex((prev) => prev + 1)
  }

  return (
    <Background onClick={onClose}>
      <CloseBtn src='/icon/x-black.svg' />
      <Media onClick={(e) => e.stopPropagation()}>
        <GalleryImage
          src={images[selectedIndex]}
          alt={images[selectedIndex]}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
        <BottomContainer>
          <ArrowBtn src='/icon/chevron-up-left.svg' onClick={handlePrev} />
          <PageText>
            {selectedIndex + 1} / {images.length}
          </PageText>
          <ArrowBtn src='/icon/chevron-up-right.svg' onClick={handleNext} />
        </BottomContainer>
      </Media>
    </Background>
  )
}

const ArrowBtn = styled(BackgroundImage)`
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  cursor: pointer;
`

const Background = styled(Column)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${(p) => p.theme.color.white};
  z-index: 100;
`

const GalleryImage = styled(Image).attrs({
  objectFit: 'contain',
  layout: 'responsive',
})``

const BottomContainer = styled(Row)`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 40px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const CloseBtn = styled(BackgroundImage)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const PageText = styled(H3Text)``
