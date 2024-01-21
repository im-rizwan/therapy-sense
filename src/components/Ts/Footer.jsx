import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({view}) => {


		return (
			<footer className={`${view==="desktop"?"child":""}  px-4 py-8 bg-[#9589BF] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ring-[0.2px] ring-[#8493CD] m-1 text-[#555276]`}>
			<div className=" flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
				<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
					<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
					<img src='tslogo.png' alt='ts-logo' />
					</div>
					<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
						<li>
							<Link rel="noopener noreferrer" href="#">Terms of Use</Link>
						</li>
						<li> 
						<Link rel="noopener noreferrer" href="#">Privacy</Link>
						</li>
					</ul>
				</div>
				<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
					<li>
					<Link rel="noopener noreferrer" href="#">Instagram</Link>
					</li>
					<li>
					<Link rel="noopener noreferrer" href="#">Facebook</Link>
					</li>
					<li>
					<Link rel="noopener noreferrer" href="#">X</Link>
					</li>
				</ul>
			</div>
		</footer>
		  )

	
	
  
}

export default Footer