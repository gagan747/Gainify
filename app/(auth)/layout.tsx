import Loader from "@/components/loader";
import PageIllustration from "@/components/page-illustration";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
			<main className='grow'>
				<PageIllustration />
				<Loader />
				{children}
			</main>
		);
}
