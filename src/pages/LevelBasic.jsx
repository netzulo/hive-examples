/*Pages & Partials*/
import MenuTop from '../components/MenuTop'
import PartialExampleOne from './partials/ExampleOne'
import PartialExampleTwo from './partials/ExampleTwo'
import PartialExampleThree from './partials/ExampleThree'
import PartialExampleFour from './partials/ExampleFour'

const LevelBasic = () => {

  return (
    <>
      <header><MenuTop /></header>
      <section>
        <h1>LevelBasic</h1>
          <ol type="1">
            <li><a href="https://docs.google.com/document/d/1VswZNMFP3TWFbGf68kjRZjsWGhGvqPYsYO9B3Gm5cGM">Doc ExampleOne</a></li>
            <li><a href="https://docs.google.com/document/d/1IX6191Gdokv2GAKRrOf7I4IzestYlxS_wmqI_83cL30">Doc ExampleTwo</a></li>
            <li><a href="https://docs.google.com/document/d/15vhyHego5yVXgdKOvIWPF5W8UnGmjCTfK0FmH1sdbuo">Doc ExampleThree</a></li>
            <li><a href="https://docs.google.com/document/d/1kti03EmgQA3O_RQRInEtaYic-Ec1RzB6uoyC1Z8120w">Doc ExampleFour</a></li>
          </ol>
        <hr/>
        <h2>ExampleOne</h2>
          <PartialExampleOne />
        <hr/>
        <h2>ExampleTwo</h2>
          <PartialExampleTwo />
        <hr/>
        <h2>ExampleThree</h2>
          <PartialExampleThree />
        <hr/>
        <h2>ExampleFour</h2>
          <PartialExampleFour />
        <hr/>
      </section>
      <footer></footer>
    </>
  )
}

export default LevelBasic
