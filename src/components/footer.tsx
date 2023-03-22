export const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col items-center justify-center md:ml-4 sm:ml-4 min-[300px]:ml-4">
                <ol className="text-xl">
                    <li>Coord. Projeto: Marcos Castillo</li>
                    <li>Bolsista 1: Joao Formighieri</li>
                    <li>Bolsista 2: Maria Tavares</li>
                    <li>Bolsista 3: Thiago Ferreira</li>
                    <li>Programador 1: <a href="https://www.github.com/EuclidesVit" target={'_blank'} className='text-blue-600'>João Euclides</a></li>
                    <li>Programador 2: <a href="https://www.github.com/maccuci" target={'_blank'} className='text-blue-600'>Antônio Gabriel</a></li>
                </ol>
                {/* <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Coord. Projeto:</dt>
                        <dd className="text-lg font-semibold">Marcos Castillo</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Bolsista 1:</dt>
                        <dd className="text-lg font-semibold">João Formighieri</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Bolsista 2:</dt>
                        <dd className="text-lg font-semibold">Maria Tavares</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Bolsista 3:</dt>
                        <dd className="text-lg font-semibold">Thiago Ferreira</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Programador 1:</dt>
                        <dd className="text-lg font-semibold"><a href="https://www.github.com/EuclidesVit" target={'_blank'} className='text-blue-600'>João Euclides</a></dd>
                    </div>
                    <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-zinc-900 md:text-lg">Programador 2:</dt>
                        <dd className="text-lg font-semibold"><a href="https://www.github.com/maccuci" target={'_blank'} className='text-blue-600'>Antônio Gabriel</a></dd>
                    </div>
                </dl> */}
                <h2 className="text-xl mt-2">Veja o código do projeto em nosso repositório <a href="https://www.github.com/maccuci/search-engine" target={'_blank'} className='text-blue-600'>Clicando Aqui</a>.</h2>
            </footer>
        </div>
    )
}