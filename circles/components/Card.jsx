export default function Card (props){
    return (
        


<div className="max-w-xs rounded-md shadow-md bg-yellow-100 dark:bg-gray-900 dark:text-gray-100 font-mons">
	<img src={props.img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between sp p-6 space-y-8">
		<div className="">
		    <h2 className="text-xl font-bold">{props.title}</h2>
			<p className="dark:text-gray-100">{props.description}</p>
		</div>
        <a href={props.href} className="font-bold">Read more</a>
		
	</div>
</div>

        
    )
}


