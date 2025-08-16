export default function RiskDisclosure() {
	return (
		<div className="min-h-screen bg-[#0c1015] bg-[url('../public/bg-stars.webp')] bg-cover bg-center bg-fixed bg-no-repeat px-6 py-16">
			<div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-gray-800">
					<h1 className="text-4xl font-bold text-white mb-8 text-center">Risk Disclosure</h1>
					<p className="text-gray-300 mb-8 text-center">Last updated: January 2024</p>

					{/* Software Risks */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">1. Software and Technical Risks</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							View Market provides software tools and platforms that may contain bugs, errors, or technical limitations that could affect their performance and reliability. As with any software application, our tools may experience unexpected behavior, crashes, or data processing errors that could impact your analysis or decision-making processes. Users should be aware that software-based tools are inherently subject to technical risks and limitations.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Our charting and analytical tools rely on complex algorithms and data processing systems that may not always function as expected. Technical issues such as server downtime, network connectivity problems, browser compatibility issues, or device-specific limitations could prevent you from accessing our tools when needed. These technical risks are inherent to all software-based solutions and cannot be completely eliminated.
						</p>
						<p className="text-gray-300 leading-relaxed">
							View Market continuously works to improve our software tools and address technical issues, but we cannot guarantee that our platform will be free from all technical problems or limitations. Users should have contingency plans and alternative tools available when relying on our software for critical analysis or time-sensitive decisions. Regular software updates may also temporarily affect functionality or introduce new technical considerations.
						</p>
					</section>

					{/* Data Risks */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">2. Data Accuracy and Reliability Risks</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							The data displayed through View Market&apos;s tools is sourced from third-party providers and may contain inaccuracies, delays, or errors that are beyond our control. Market data feeds can experience technical issues, transmission delays, or data corruption that may result in incorrect or incomplete information being displayed in our charting tools. Users must understand that data accuracy cannot be guaranteed at all times.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Historical data used in our analytical tools may be subject to revisions, corrections, or adjustments by data providers, which could affect the accuracy of backtesting results or historical analysis. Real-time data feeds may experience latency issues or temporary interruptions that could impact the timeliness and reliability of the information displayed through our software tools.
						</p>
						<p className="text-gray-300 leading-relaxed">
							View Market acts solely as a tool provider for displaying and analyzing data provided by external sources. We do not verify, validate, or guarantee the accuracy of the underlying data used in our tools. Users are responsible for verifying data accuracy through independent sources and should not rely solely on the data displayed through our software for making important decisions. Data discrepancies between different sources or platforms are common and should be expected.
						</p>
					</section>

					{/* Technical Limitations */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">3. Technical Limitations and Performance Constraints</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Our software tools have inherent technical limitations that may affect their performance, accuracy, or functionality under certain conditions. These limitations include processing speed constraints, memory usage limitations, data volume restrictions, and computational complexity boundaries that may impact the tool&apos;s ability to handle large datasets or complex analytical tasks effectively.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Performance of our tools may vary significantly based on factors such as internet connection speed, device specifications, browser capabilities, and concurrent user load on our servers. During periods of high usage or market volatility, our systems may experience slower response times or reduced functionality. These performance variations are normal for web-based software applications and should be anticipated by users.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Certain advanced features or analytical functions may have specific technical requirements or limitations that could affect their availability or accuracy. Complex calculations, large-scale data processing, or resource-intensive operations may take longer to complete or may not be available during peak usage periods. Users should understand these technical constraints and plan their analytical workflows accordingly to account for potential limitations.
						</p>
					</section>

					{/* User Responsibility */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibility and Due Diligence</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Users of View Market&apos;s software tools are solely responsible for their own analysis, interpretation, and use of the information provided through our platform. Our tools are designed to assist with data visualization and technical analysis, but users must exercise their own judgment and expertise when interpreting results or making decisions based on the output from our software.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							It is the user&apos;s responsibility to verify the accuracy and reliability of any data or analysis results obtained through our tools by cross-referencing with independent sources and conducting their own due diligence. Users should not rely exclusively on our software tools for critical decisions and should always maintain alternative methods for data analysis and verification.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Users must ensure they have the necessary knowledge, skills, and expertise to properly use our analytical tools and interpret their results. View Market provides software tools but does not provide training, education, or guidance on how to use these tools effectively or how to interpret analytical results. Users are responsible for understanding the limitations and appropriate applications of each tool and feature within our platform.
						</p>
					</section>

					{/* Market Volatility Disclaimers */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">5. Market Volatility and Analysis Limitations</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							View Market&apos;s analytical tools are designed to process and display market data, but they cannot predict or account for sudden market volatility, unexpected events, or extreme market conditions that may render historical analysis or technical indicators unreliable. Market conditions can change rapidly and unpredictably, making past performance and technical analysis potentially irrelevant for future outcomes.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Technical analysis tools and indicators provided through our platform are based on historical data patterns and mathematical calculations that may not accurately reflect future market behavior. These tools should not be considered predictive or reliable indicators of future market movements, and users should understand that all analytical methods have inherent limitations and potential for error.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Extreme market events, such as flash crashes, trading halts, or unprecedented volatility, may cause our analytical tools to produce misleading or inaccurate results. During such periods, the reliability of technical indicators and charting tools may be significantly compromised. Users should be aware that no analytical tool can account for all market scenarios or provide reliable guidance during extraordinary market conditions.
						</p>
					</section>

					{/* Third-Party Risks */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Service and Integration Risks</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							View Market&apos;s platform relies on various third-party services, data providers, and external integrations that are beyond our direct control. These third-party dependencies may experience outages, data quality issues, policy changes, or service discontinuations that could affect the functionality and reliability of our software tools. Users should be aware that our platform&apos;s performance is partially dependent on external services.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Data feed providers may change their pricing, terms of service, or data availability without notice, which could impact the features and functionality available through our platform. Third-party API limitations, rate limits, or access restrictions may also affect the performance and capabilities of our analytical tools. These external factors are inherent risks when using any software platform that integrates with multiple third-party services.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Security vulnerabilities or data breaches at third-party service providers could potentially affect the security and privacy of data processed through our platform. While we implement security measures and carefully select our third-party partners, we cannot guarantee the security practices or reliability of external services. Users should understand that third-party risks are an inherent aspect of modern software platforms and cloud-based services.
						</p>
					</section>

					{/* System Failures */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">7. System Failures and Service Interruptions</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Our software platform may experience system failures, server outages, or service interruptions that could prevent users from accessing our tools when needed. These interruptions may occur due to hardware failures, software bugs, network issues, cyber attacks, natural disasters, or other unforeseen circumstances that are beyond our control. Such events could result in temporary or extended periods of service unavailability.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							During system failures or maintenance periods, users may lose access to their analytical work, saved charts, or ongoing analysis sessions. While we implement backup systems and redundancy measures, there is always a risk of data loss or corruption during system failures. Users should regularly save their work and maintain local backups of important analysis when possible.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Recovery from system failures may take varying amounts of time depending on the nature and severity of the issue. While we strive to minimize downtime and restore services quickly, we cannot guarantee specific recovery timeframes or service level agreements. Users who require guaranteed uptime or immediate access to analytical tools should maintain alternative solutions and contingency plans.
						</p>
					</section>

					{/* Security Risks */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">8. Security and Privacy Risks</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Despite implementing security measures and best practices, View Market&apos;s platform may be subject to security vulnerabilities, cyber attacks, or unauthorized access attempts that could compromise user data or system integrity. No online platform can guarantee complete security, and users should be aware that internet-based software tools inherently carry security risks that cannot be entirely eliminated.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Users are responsible for maintaining the security of their own accounts, including using strong passwords, enabling two-factor authentication when available, and keeping their login credentials confidential. Sharing account access or using weak security practices could expose user accounts to unauthorized access or misuse. Users should also ensure their own devices and networks are secure when accessing our platform.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Data transmitted between users and our platform may be subject to interception or monitoring by third parties, despite encryption and security protocols. Users should be cautious about accessing our platform from public networks or unsecured connections. Additionally, users should be aware that their usage patterns and analytical activities may be logged for security and performance monitoring purposes, as outlined in our Privacy Policy.
						</p>
					</section>

					{/* Compliance Risks */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">9. Regulatory and Compliance Risks</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							Users are solely responsible for ensuring that their use of View Market&apos;s software tools complies with all applicable laws, regulations, and professional standards in their jurisdiction. Regulatory requirements for financial analysis tools, data usage, and professional conduct may vary significantly between different countries, states, or professional contexts, and users must understand and comply with these requirements.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							Changes in regulatory requirements or compliance standards may affect the permissible use of our analytical tools or require users to modify their workflows or procedures. View Market does not provide legal or compliance advice, and users should consult with appropriate legal and regulatory experts to ensure their use of our tools meets all applicable requirements.
						</p>
						<p className="text-gray-300 leading-relaxed">
							Some features or capabilities of our software tools may not be suitable for use in certain regulated environments or professional contexts. Users in regulated industries or professional roles should carefully evaluate whether our tools meet their specific compliance requirements and should implement appropriate controls and procedures to ensure regulatory compliance when using our platform.
						</p>
					</section>

					{/* General Disclaimers */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-white mb-4">10. General Disclaimers and Risk Acknowledgment</h2>
						<p className="text-gray-300 leading-relaxed mb-4">
							View Market provides software tools and platforms &quot;as is&quot; without any warranties or guarantees regarding their performance, accuracy, reliability, or suitability for any particular purpose. We explicitly disclaim all warranties, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Users assume all risks associated with using our software tools.
						</p>
						<p className="text-gray-300 leading-relaxed mb-4">
							View Market is solely a tool provider and does not offer investment advice, financial guidance, or market insights. Our software tools are designed to assist with data analysis and visualization, but they do not constitute recommendations, suggestions, or advice of any kind. Users must make their own independent decisions and should consult with qualified professionals when making important financial or business decisions.
						</p>
						<p className="text-gray-300 leading-relaxed">
							By using View Market&apos;s software tools, users acknowledge that they have read, understood, and accepted all risks outlined in this disclosure. Users agree that View Market shall not be liable for any losses, damages, or adverse outcomes resulting from the use of our software tools, regardless of whether such risks were foreseeable or disclosed. Users are encouraged to carefully consider these risks and their own risk tolerance before using our platform.
						</p>
					</section>

					<div className="mt-12 pt-8 border-t border-gray-700">
						<p className="text-gray-400 text-sm text-center">
							This Risk Disclosure is effective as of January 2024 and may be updated from time to time.
							<br />View Market is a software tool provider and does not offer financial advice or investment services.
							<br />Users assume all risks associated with using our analytical tools and software platform.
						</p>
					</div>
			</div>
		</div>
	);
}