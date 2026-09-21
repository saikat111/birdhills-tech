import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialItem {
  id: string;
  authorName: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarUrl?: string | null;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSection({ testimonials }: TestimonialsProps) {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest text-[#1D68BD] uppercase mb-3">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            What our clients say.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F7F9FC] rounded-2xl p-8 border border-[#E4E7EC] flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote size={24} className="text-slate-300 group-hover:text-[#1D68BD] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#101828] font-medium leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                {t.avatarUrl ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                      src={t.avatarUrl}
                      alt={t.authorName}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#1D68BD] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {t.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-[#0B1730]">{t.authorName}</div>
                  <div className="text-xs text-[#667085]">
                    {t.role}, <span className="text-slate-700 font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;
