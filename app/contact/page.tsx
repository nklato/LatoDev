"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { useState } from "react";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:dev@lato.dev",
		label: "Email",
		handle: "dev@lato.dev",
	},
	{
		icon: <Mail size={20} />,
		href: "https://instagram.com/konrd_nor",
		label: "Instagram",
		handle: "@konrd_nor",
	},
];

export default function Example() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
		alert("Form submitted!");
	};

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.handle}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}

					{/* Contact Form Tile */}
					<Card>
						<div className="p-4 relative flex flex-col items-center gap-4 md:gap-8 md:py-24 lg:pb-48 md:p-16">
							<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<h3 className="text-xl font-medium text-zinc-200 lg:text-3xl font-display">
								Contact Form
							</h3>
							<form
								onSubmit={handleSubmit}
								className="flex flex-col w-full max-w-sm gap-4 text-zinc-200"
							>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									placeholder="Your Name"
									className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
								/>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									placeholder="Your Email"
									className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
								/>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									placeholder="Your Message"
									className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
									rows="4"
								/>
								<button
									type="submit"
									className="px-4 py-2 mt-2 font-medium text-white bg-orange-600 rounded hover:bg-orange-700"
								>
									Send Message
								</button>
							</form>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
