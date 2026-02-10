"use client"

import { useState, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { youtubeReviews, reviews } from "@/lib/products"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${rating}-${i}`}
          className={`w-4 h-4 ${
            i < rating
              ? "fill-[#f5c518] text-[#f5c518]"
              : "fill-[#ddd] text-[#ddd]"
          }`}
        />
      ))}
    </div>
  )
}

function VideoCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? youtubeReviews.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === youtubeReviews.length - 1 ? 0 : c + 1))
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeReviews[current].id}`}
            title={youtubeReviews[current].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          className="p-2 text-[#111] hover:text-[#555] transition-colors"
          aria-label="Video anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {youtubeReviews.map((_, i) => (
            <button
              key={`dot-${youtubeReviews[i].id}`}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-[#111]" : "bg-[#ccc]"
              }`}
              aria-label={`Ir al video ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="p-2 text-[#111] hover:text-[#555] transition-colors"
          aria-label="Video siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1))
  }, [])

  const next = useCallback(() => {
    setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1))
  }, [])

  const review = reviews[current]

  return (
    <div>
      <div className="bg-[#f8f8f8] p-8 md:p-12">
        <StarRating rating={review.rating} />
        <h4 className="text-[#111] text-lg font-medium mt-4 mb-3">
          {review.title}
        </h4>
        <p className="text-[#555] text-sm leading-relaxed mb-6">
          {review.text}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#ddd] rounded-full" />
          <div>
            <p className="text-[#111] text-sm font-medium">{review.name}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          className="p-2 text-[#111] hover:text-[#555] transition-colors"
          aria-label="Resena anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={`review-dot-${reviews[i].name}`}
              type="button"
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-[#111]" : "bg-[#ccc]"
              }`}
              aria-label={`Ir a resena ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="p-2 text-[#111] hover:text-[#555] transition-colors"
          aria-label="Resena siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Video Reviews */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <h2 className="text-[#111] text-3xl md:text-4xl lg:text-5xl font-light mb-2">
                Explora nuestras{" "}
                <br className="hidden md:block" />
                resenas de Punk
              </h2>
            </div>
            <p className="text-[#777] text-sm max-w-md">
              Los mejores revisores comparten sus opiniones
            </p>
          </div>
          <VideoCarousel />
        </div>

        {/* Written Reviews */}
        <div>
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  )
}
