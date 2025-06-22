import React from "react";
import DynamicTabs, { TabItem } from "../../components/DynamicTabs";

const FinanceServices: React.FC = () => {
	const initialTabs: TabItem[] = [
		{
			id: "general",
			label: "General",
			content: `<h1 /> general</h1>`,
		},
		{
			id: "random",
			label: "Random",
			content: `<h1>Random</h1>`,
		},
	];
	return (
		<div className="p-4 m-4 border rounded-lg">
			<h1 className="text-2xl font-bold mb-4">Finance Services</h1>
			<p className="text-gray-700">
				Here you can manage your financial services.
			</p>
			<ul className="list-disc pl-5 mt-4">
				<li>Service 1: Description of service 1</li>
				<li>Service 2: Description of service 2</li>
				<li>Service 3: Description of service 3</li>
			</ul>
			<DynamicTabs initialTabs={initialTabs} />
		</div>
	);
};
export default FinanceServices;
