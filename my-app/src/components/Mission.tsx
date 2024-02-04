export default function Component() {
    return (
        <section className="w-screen h-screen py-12 md:py-24 lg:py-32 bg-pink-200 dark:bg-violet-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter text-pink-700 dark:text-violet-200 sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Our Mission
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            untry? Figure out what you need to know.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <button
                            className="inline-flex h-9 items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-500 dark:hover:bg-violet-600 dark:focus-visible:ring-violet-600"
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}