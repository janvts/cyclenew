import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { FloatButton, Modal, Form, Input } from 'antd';
import ListComponent from './Components/list';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [kilogramm, setKilogramm] = useState<string>('0');
    const [realValue, setRealValue] = useState<string>('180');
    const stringRef = useRef('180');

    useEffect(() => {
        if(localStorage.getItem("saved") !== null){

            let value :string |  null =  localStorage.getItem("saved")
            if(value !== null) {
                setRealValue(value)
            }
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

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleUsernameChange = (event: any) => {
        console.log(event.target.value)
        stringRef.current = event.target.value.toString()
    };

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
                    title="Create an exclusive save slot!"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <Form>
                        <Form.Item label="Give it a name:">
                            <Input type="text"  onChange={handleUsernameChange} />
                        </Form.Item>
                        Temporal save slots are accessible for everyone; this one is exclusive.
                    </Form>
                </Modal>
            </>
        );
    }

    return (
        <div>
            <ListComponent kilogramm={realValue} />
            <ChangeKG />
        </div>
    );
}

export default App;
