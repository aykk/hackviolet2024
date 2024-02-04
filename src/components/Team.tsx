const people = [
    {
        name: 'Andrew Kim',
        description: 'Sophomore studying CS',
        imageSrc: '/images/img-and.jpg',
        imageAlt: 'Andrew Kim',
        url: 'https://github.com/aykk',
    },
    {
        name: 'Leo Kim',
        description: 'Sophomore studying CMDA',
        imageSrc: '/images/img-leo.jpg',
        imageAlt: 'Leo Kim',
        url: 'https://github.com/corvails',
    },
    {
        name: 'monster',
        description: 'thanks monster',
        imageSrc: '/images/img-mon.jpg',
        imageAlt: 'Monster',
        url: '',
    }
]

function Team() {
    return (
        <section id="section4" className="bg-pink-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-6">
                    <h3 className="font-semibold text-5xl lg:text-7xl text-center mt-6 mb-6 text-[#db2877]">Who are we?</h3>
                    <div className="h-5"></div>
                    <div className="mt-2 space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 justify-center">
                        {people.map((person) => (
                            <div key={person.name} className="group relative">
                                <a href={person.url} className="block">
                                    <div className="p-6 rounded-lg border-black shadow-md hover:shadow-lg hover:-translate-y-1 transform transition bg-pink-300">
                                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                                            <img
                                                src={person.imageSrc}
                                                alt={person.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-sm text-gray-500">{person.description}</h3>
                                        <p className="text-base font-semibold text-gray-900">{person.name}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-20"></div>
        </section>
    );
}

export default Team;  