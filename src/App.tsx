import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FloatButton, Modal, Form, Input } from 'antd';
import ListComponent from './Components/list';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [secured, setSecured] = useState(false);
    const [kilogramm, setKilogramm] = useState<string>('0');
    const [realValue, setRealValue] = useState<string>('180');
    const stringRef = useRef('180');
    const passwordRef = useRef("initial")

    useEffect(() => {
        if(localStorage.getItem("saved") !== null){

            let value :string |  null =  localStorage.getItem("saved")
            if(value !== null) {
                setRealValue(value)
            }
        }
        if(localStorage.getItem("password")== "Backsquat"){
            setSecured(false)
        }else{
            setSecured(true)
        }
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        localStorage.setItem('saved', stringRef.current);
        setRealValue(stringRef.current);

        setIsModalOpen(false);
    };

    const handlePassword=() =>{

        if(passwordRef.current === "Backsquat") {
            localStorage.setItem('password', passwordRef.current);
            setSecured(false);
        }

    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleUsernameChange = (event: any) => {
        console.log(event.target.value)
        stringRef.current = event.target.value.toString()
    };

    const handlePasswordChange = (event: any) => {
        passwordRef.current = event.target.value.toString()
    }

    function ChangeKG() {
        return (
            <>
                <FloatButton
                    shape="square"
                    description={`${realValue}`}
                    type="primary"
                    onClick={showModal}
                    style={{
                        right: 24,
                    }}
                />
                <Modal
                    title="Hello Tim!"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form>
                        <Form.Item label="Type in your weight:">
                            <Input type="text"  onChange={handleUsernameChange} />
                        </Form.Item>
                        This App is exclusive for Tim only. Any other use is strictly forbidden!
                    </Form>
                </Modal>
            </>
        );
    }

    return (
        <div>
            <ListComponent kilogramm={realValue} />
            <ChangeKG />
            <Modal
                title="Security Check"
                open={secured}
                onOk={handlePassword}
                width={window.innerWidth}
            >
                <Form>
                    <Form.Item label="Enter Password">
                        <Input type="text"  onChange={handlePasswordChange} />
                    </Form.Item>
                    This App is exclusive for Tim only. Any other use is strictly forbidden!
                </Form>
            </Modal>
        </div>
    );
}

export default App;
