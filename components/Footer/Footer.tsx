import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	footerLinksItem,
	footerSocialItems,
	footerTermsItem,
} from "@constants";
import { TfooterLinkProps } from "@/types";
import { IoLogoWhatsapp, IoCallOutline } from "react-icons/io5";
import { LiaTelegram } from "react-icons/lia";
import { MdOutlineAttachEmail } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";

export default function Footer() {
	return (
		<div className="footer relative pt-14 break-words">
			<div className="relative z-[2] overflow-hidden w-full md:px-12 max-md:px-5">
				<div className="flex flex-col lg:flex-row py-10 mb-8 md:space-x-6">
					<div className="mb-12 pr-2">
						<Link
						href="/"
						data-analytics-event='{"category":"Footer","action":"go to home","label":"text:home"}'
						className="color-fg-default d-inline-block"
						aria-label="Go to ViewMarket homepage">
						<div className="text-white text-2xl font-bold">
							ViewMarket
						</div>
					</Link>
						<div className="text-white">
							<h2 className="mt-6 font-semibold">
								Subscribe to market insights
							</h2>
							<p className="text-[14px] text-[#7d8590] mb-6 ">
								Get trading insights, market analysis, and expert strategies. Weekly updates.
								Right in your inbox.
							</p>
							<Link
								href="/"
								className="mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg">
								Subscribe
							</Link>
						</div>
					</div>

					<div className="lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-6">
						{footerLinksItem.map((item) => (
							<div
								className="text-[#7d8590]"
								key={item.id}>
								<h2 className="font-extrabold mb-4">{item.title}</h2>
								<>
									{item.links.map((link) => {
										const linkWithIcon = link as TfooterLinkProps;
										const getIcon = (title: string) => {
											switch (title) {
												case "WhatsApp":
													return <IoLogoWhatsapp className="mr-2 w-4 h-4 flex-shrink-0" />;
												case "Telegram":
													return <LiaTelegram className="mr-2 w-4 h-4 flex-shrink-0" />;
												case "24/7 Call":
													return <IoCallOutline className="mr-2 w-4 h-4 flex-shrink-0" />;
												case "Email Us":
													return <MdOutlineAttachEmail className="mr-2 w-4 h-4 flex-shrink-0" />;
												case "Raise a Ticket":
													return <HiOutlineTicket className="mr-2 w-4 h-4 flex-shrink-0" />;
												default:
													return null;
											}
										};
										return (
											<ul
												className="text-[14px]"
												key={link.id}>
												<li className="mb-4">
													<Link
														href={link.href}
														className="hover:text-blue-600 flex items-center">
														{linkWithIcon.icon && getIcon(link.title)}
														{link.title}
													</Link>
												</li>
											</ul>
										);
									})}
								</>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-[#161b22] md:px-12 max-md:px-5 w-full">
				<div className="w-full text-[12px] md:flex flex-row-reverse py-6 justify-between items-center">
					<ul className="flex items-center max-md:mb-4  ">
						{footerSocialItems.map((item) => (
							<li
								key={item.id}
								className="mr-4">
								<Link
									href={item.href}
									target="_blank">
									<Image
										src={item.src}
										height="18"
										width="18"
										className="d-block"
										loading="lazy"
										decoding="async"
										alt={item.src}
									/>
								</Link>
							</li>
						))}
					</ul>

					<ul className="flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap">
						{footerTermsItem.map((item) => (
						<React.Fragment key={item.id}>
							<li className="mr-3 ">{item.title}</li>
								{item.links.map((link) => (
									<li
										key={link.id}
										className="mr-4">
										<Link
											href={link.href}
											className="hover:text-blue-600">
											{link.title}
										</Link>
									</li>
								))}
						</React.Fragment>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
