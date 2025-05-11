export default function Card({ movie }) {
  const { title, vote_average, poster_path, overview } = movie
  const imageUrl = `${import.meta.env.VITE_IMAGE_URL}${poster_path}`

  return (
    <section class="overflow-hidden rounded-lg bg-white shadow-md">
      <img src="${imageUrl}" alt="${title}" class="h-64 w-full object-cover object-center" />
      <div class="p-4">
        <h2 class="text-xl font-semibold text-gray-800">${title}</h2>
        <p class="mt-2 text-gray-600">${overview}</p>
        <div class="mt-3 flex items-center justify-between">
          <span class="text-gray-700">Rating: ${vote_average}</span>
        </div>
      </div>
    </section>
  )
}
