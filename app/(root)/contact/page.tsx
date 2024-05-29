import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from "lucide-react";

export default function Component() {
	return (
		<main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 text-sky-950">
			<div className="grid md:grid-cols-2 gap-12">
				<div>
					<h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
					<p className="text-gray-500 dark:text-gray-400 mb-8">
						Have a question or want to work together? Fill out the form below
						and we&apos;ll get back to you as soon as possible.
					</p>
					<form className="space-y-4">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" className="input-field"/>
							</div>
							<div>
								<Label htmlFor="email">Email</Label>
								<Input id="email" placeholder="Enter your email" type="email" className="input-field"/>
							</div>
						</div>
						<div>
							<Label htmlFor="message">Message</Label>
							<Textarea
								className="min-h-[150px] textarea"
								id="message"
								placeholder="Enter your message"
							/>
						</div>
						<Button type="submit" className="button">Send Message</Button>
					</form>
				</div>
				<div className="space-y-6">
					<div>
						<h2 className="text-2xl font-bold mb-2">Contact Information</h2>
						<div className="space-y-2">
							<div className="flex items-center gap-2">
								<MapPinIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								<p>123 Main St, Anytown USA</p>
							</div>
							<div className="flex items-center gap-2">
								<PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								<a href="#">(123) 456-7890</a>
							</div>
							<div className="flex items-center gap-2">
								<MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
								<a href="#">info@example.com</a>
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-2">Follow Us</h2>
						<div className="flex items-center gap-4">
							<Link aria-label="Facebook" href="#">
								<FacebookIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
							</Link>
							<Link aria-label="Twitter" href="#">
								<TwitterIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
							</Link>
							<Link aria-label="Instagram" href="#">
								<InstagramIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
							</Link>
							<Link aria-label="LinkedIn" href="#">
								<LinkedinIcon className="h-6 w-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
