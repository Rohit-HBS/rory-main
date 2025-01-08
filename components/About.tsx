import Image from 'next/image';
import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'
import  localFont  from "next/font/local";


const myFont = localFont({
  src: '../public/fonts/BrandonGrotesque-Light.ttf',
  display: 'swap',
})

const About = (): JSX.Element => {
	return (
		<main className={myFont.className}>
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-12 hidden md:block md:mt-10 md:pt-20  rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl pt-10 mb-10 mt-10 md:mt-10 md:pt-10">{personalInfo.name}</h1>
					<p>
						Rohit Bhisikar is a Research Associate at Harvard Business School. He did his undergraduate from Ashoka University.
						 <br/>
						 <br/>
						He collaborates with HBS faculty on an article or a case focusing on a Fortune 500 company, a five-person start-up, or a nonprofit organization. His research dig deep in fields ranging from entrepreneurship to finance to organizational behavior. 
						 <br/>
						 <br/>
						 As a curator and academic, Rohit is also interested in philosophy, minority expression, and documentary practice. He lives and works in Mumbai.
						 <br/>
						 <br/><a className = "text-sm">✉️ {personalInfo.about.email}</a>
					</p>
				</div>
			</div>
		</section>
		</main>
	);
};

export default About;
