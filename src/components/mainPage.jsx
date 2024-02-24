import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import {Auth} from "./Auth";
import {useEffect, useState} from "react";

export const MainPage =()=> {
    const [opened, { open, close }] = useDisclosure(false);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('storedData')) || [];
        setAccounts(storedData);
    }, []);

    useEffect(() => {
        const openModal = JSON.parse(localStorage.getItem('openModal'));
        if (openModal) {
            open();
        }
    }, []);

    const handleModalClose = () => {
        close();
        localStorage.removeItem('openModal');
    };

    return (
        <div>
            <>
                <Modal opened={opened} onClose={handleModalClose} title="Authentication">
                    <Auth updateAccounts={setAccounts} />
                </Modal>
                <Button onClick={open}>{`${accounts.length > 0 ? 'Аккаунты' : 'Войти'}`}</Button>
            </>
        </div>
    );
}
