import Translate from "./components/translate"

export const App = () => {
    return (
        <>
            <Translate />
            {/* <Debug/> */}
            <footer className="flex flex-col items-center justify-center mt-12 md:ml-4 sm:ml-4 min-[300px]:ml-4">
                <h2 className="text-xl">Veja o código do projeto feito em python <a href="https://www.github.com/EuclidesVit/buscador-de-palavras" target={'_blank'} className='text-blue-600'>Clicando Aqui</a>.
                </h2>
                <p>Desevolvido por <a href="https://www.github.com/maccuci" target={'_blank'} className='text-blue-600'>Antônio Gabriel</a> e <a href="https://www.github.com/EuclidesVit" target={'_blank'} className='text-blue-600'>João Euclides</a>.</p>
            </footer>
        </>
    )
}