import GoogleReviewsWidget from "google-reviews-widget"

export function Reviews() {
  return (
    <section id="review" className="py-20 bg-white">
		<div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2220] mb-4">
            Avaliações dos <span className="text-[#d87934]">clientes</span>
          </h2>
          <p className="text-xl text-gray-600">
            
          </p>
        </div>

		<GoogleReviewsWidget instanceId='3UlMOB9Vkd1jajNMzqH0' />
    </section>
  )
}
