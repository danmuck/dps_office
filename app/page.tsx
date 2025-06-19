"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@headlessui/react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-start justify-center">
			<title>Home</title>
			<h1
				className={`w-full p-2 bg-red-600 text-center text-xl text-black rounded-md`}
			>
				[ -- UNDER CONSTRUCTION -- ]
			</h1>
			<div className="w-full p-8 grid grid-cols-2">
				<div className="align-items-left text-left">
					<p className="text-md">
						Welcome to my daily productivity suite (dps)! This is a
						personal project designed to help manage daily tasks,
						track progress, and enhance productivity.
					</p>
					<p>
						This aims to serve as both my personal portfolio, as
						well as my daily task manager and simply a sandbox where
						I can develop around ideas that I am passionate about.
					</p>
				</div>
				<div className="flex-col items-center justify-center">
					<div className=" items-right   mt-4">
						<Image
							src="/full_logo.svg"
							alt="danmuck"
							width={256}
							height={256}
							className="flex flex-1 bg-white rounded-full shadow-lg"
						/>
					</div>
					<div className="flex flex-row items-center justify-center space-x-4 mt-4">
						<Button>
							<Link href="https://github.com/danmuck">
								<Image
									src="/github-mark.svg"
									alt="GitHub Logo"
									width={32}
									height={32}
									className="rounded-full shadow-lg"
								/>
							</Link>
						</Button>
						<Button className="rounded bg-sky-600 px-4 py-2 text-sm text-white">
							<Link href="https://www.linkedin.com/in/danmuck/">
								in
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="text-left w-full p-8 space-y-4">
				<h1 className="text-2xl font-bold text-right">Projects</h1>
				<div className="text-lg">
					<ul className="list-disc list-inside">
						<li>dps_office (frontend)</li>
						<li>dps_http (backend)</li>
						<li>dps_net (udp server)</li>
						<li>dps_files (file server)</li>
						<li>Kademlia DHT</li>
						<li>Raft with KV Store</li>
						<li>Learning Management System API (team project)</li>
					</ul>
				</div>
				<h1 className="text-2xl font-bold text-right">Education</h1>
				<div className="text-lg">
					<ul className="list-disc list-inside">
						<li>
							SUNY at Buffalo, School of Engineering and Applied
							Science
						</li>
						<li>Corning Community College</li>
					</ul>
				</div>
				<h1 className="text-2xl font-bold text-right">Skills</h1>
				<div className="text-lg">
					<ul className="list-disc list-inside">
						<li>Arsenal: Golang C Python Rust TypeScript</li>
						<li>
							Tooling: UNIX/MacOS Docker Git MongoDB Postgres
							Agile
						</li>
						<li>
							Frameworks: Node.js / React / Next.js / Go-Gin /
							Django
						</li>
						<li>Networking: HTTP TCP/UDP WebRTC Websockets</li>
					</ul>
				</div>
				<h1 className="text-2xl font-bold text-right">Aspirations</h1>
				<div className="text-lg">
					<ul className="list-disc list-inside">
						<li>Network Engineering</li>
						<li>Client/Server, p2p, Cloud infrastructure</li>
						<li>Terminal tooling && clean frontends</li>
						<li>Improve my skills across the stacks</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col items-left justify-center w-full bg-black border border-red-800 rounded-lg shadow-lg p-4 ">
				<h2>Coming soon... </h2>
				<ol className="list-decimal list-inside p-4">
					<li>Profile</li>
					<li>Posts</li>
					<li>Comments</li>
					<li>Notifications</li>
					<li>Search</li>
					<li>Settings</li>
					<li>Admin Panel</li>
					<li>API Documentation</li>
					<li>Deployment</li>
					<li>Security Enhancements</li>
					<li>Analytics Dashboard</li>
					<li>Admin Dashboard</li>
					<li>Spam Detection</li>
					<li>Data Backup and Recovery</li>
					<li>Logging and Monitoring</li>
				</ol>
			</div>
		</div>
	);
}
