import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { Button, Modal, ModalManagerContext, Text } from '@pega/cosmos-react-core';


const ModalExample = () => {
  const MyModal = () => {
    return (
      <Modal heading='This is the Modal heading'>
        <Text>This is the content of the Modal.</Text>
      </Modal>
    );
  };
  const ModalButton = () => {
    const { create } = useContext(ModalManagerContext);
    return (
      <Button
        onClick={() => {
          create(MyModal);
        }}
      >
        Open Modal
      </Button>
    );
  };
  return <ModalButton />;
};
function App() {
  return (
    <div className="App">
      <ModalExample />
    </div>
  );
}

export default App;
