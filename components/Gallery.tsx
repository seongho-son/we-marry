import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { ImageSlider } from 'components/common/ImageSlider'

const IMAGE_SIZE = 120

export const Gallery: React.FC<{ images: string[] }> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const galleryImage = (src: string, index: number) => (
    <div key={index}>
      <GalleryImage
        src={src}
        alt={src}
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        priority
        onClick={() => {
          setSelectedIndex(index)
          setIsOpen(true)
        }}
      />
    </div>
  )

  return (
    <Column gap={40} style={{ width: '100%' }}>
      <Column gap={15}>
        <SectionText>GALLERY</SectionText>
        <H1Text>갤러리</H1Text>
      </Column>
      <Column gap={2}>
        <GalleryGrid3Columns>
          {images.map((item, index) => {
            if (index > 2) return
            return galleryImage(item, index)
          })}
        </GalleryGrid3Columns>
        <GalleryGrid2Columns>
          <div>
            <GalleryImage
              src={images[3]}
              alt={images[3]}
              width={IMAGE_SIZE * 2}
              height={IMAGE_SIZE * 2}
              priority
              onClick={() => {
                setSelectedIndex(3)
                setIsOpen(true)
              }}
            />
          </div>
          <Column gap={2}>
            {images.map((item, index) => {
              if (index < 4 || index > 5) return
              return galleryImage(item, index)
            })}
          </Column>
        </GalleryGrid2Columns>
        <GalleryGrid3Columns>
          {images.map((item, index) => {
            if (index < 6) return
            return galleryImage(item, index)
          })}
        </GalleryGrid3Columns>
      </Column>
      <ImageSlider
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
        index={selectedIndex}
      />
    </Column>
  )
}

const GalleryGrid3Columns = styled(Grid)`
  gap: 2px;
  grid-template-columns: 1fr 1fr 1fr;
`

const GalleryGrid2Columns = styled(GalleryGrid3Columns)`
  grid-template-columns: 2.02fr 1fr;
`

const GalleryImage = styled(Image).attrs({
  objectFit: 'cover',
  layout: 'responsive',
})`
  border-radius: 4px;
  cursor: pointer;
`
