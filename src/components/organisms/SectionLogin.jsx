import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import './SectionLogin.css';
import { guardar, imprimir } from "../../data/pilas";

function SectionLogin() {
    const [producto, setProducto] = useState('');
    const [fecha, setFecha] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        const datos = {
            producto,
            fecha,
            cantidad,
            email,
            celular
        };
        guardar(datos);
        imprimir();
    };

    return (
        <div id="login_section">
            <Image />
            <Field type="text" placeholder="Producto" text="Nombre del Producto" value={producto} onChange={(e) => setProducto(e.target.value)} />
            <Field type="datetime-local" text="Fecha del Pedido" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <Field type="number" placeholder="Cantidad" text="Cantidad (Kg)" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
            <Field type="email" placeholder="Email" text="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Field type="tel" placeholder="Celular" text="Número de Celular" value={celular} onChange={(e) => setCelular(e.target.value)} />
            <Button onClick={handleClick} />
        </div>
    );
}

export default SectionLogin;