import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const product = await fetch(`https://.../${id}`).then((res) => res.json())

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product.title,
    openGraph: {
      images: ['../../../public/assets/images/logoSonnen_wBg.png', ...previousImages],
    },
  }
}
