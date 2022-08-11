/*Pages & Partials*/
import MenuTop from '../components/MenuTop'

const Docs = () => {

  return (
    <>
      <header><MenuTop /></header>
      <section>
        <p>Para empezar a desarrollar con react+sscjs, necesitas saber</p>

        <ul>
          <li>Como hacer llamadas con la libreria</li>
          <li>tokens: propiedades</li>
          <li>tokens: metodos/funciones</li>
        </ul>

        <h4>1. Hacer llamadas con la libreria</h4>
        <p>Informacion de 1 token concreto</p>
        <p>1.1 JS nativo</p>
        <pre>
          {`
            const ssc = new SSC('https://api.hive-engine.com/rpc');
            ssc.findOne('tokens', 'tokens', { symbol:  'BUDS' }, (err, result) => {
              if(err) console.error(err)
              setState({...state, ...{tokenInfo: result}})
            })
          `}
        </pre>
        <p>1.2 JS+React</p>
        <pre>
          {`
          const ssc = new SSC('https://api.hive-engine.com/rpc');
          const [state, setState] = useState({
            tokenInfo: undefined,
          })
          useEffect(()=>{
            ssc.findOne('tokens', 'tokens', { symbol:  'BUDS' }, (err, result) => {
              if(err) console.error(err)
              setState({...state, ...{tokenInfo: result}})
            })
          }, [])
          `}
        </pre>
        <hr />
        <h4>2. Tokens: propiedades</h4>

        <hr />
        <h4>3. Tokens: metodos/funciones</h4>
      </section>
      <footer></footer>
    </>
  )
}

export default Docs

