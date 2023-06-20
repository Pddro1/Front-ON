import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/TokenReducer';
import ModalPostagem from '../../postagem/modalPostagem/ModalPostagem';
import ModalTema from '../../tema/modalTema/ModalTema';
import TabPostagem from '../../postagem/tabPostagem/TabPostagem';
import { toast } from 'react-toastify';
import Eventos from './Eventos';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );

    useEffect(() => {
        if (token == '') {
            toast.warn('Você precisa estar logado.', {
                position: 'top-right',
                autoClose: 2000, //2 segundos
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
            })
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='space-evenly' alignItems='center' className='backgroundHome spaceBetween'>
                <Grid item xs={4}>
                    <Box>
                        <Eventos />
                    </Box>
                </Grid>
                <Grid alignItems='center' xs={5} className='glass1'>
                    <Box paddingX={10}>
                        <Typography variant='h4' gutterBottom component='h4' align='center' className='titulo'>Bem vindo à Soluti<span className='title2'>ON</span></Typography>
                        <Typography variant='h5' gutterBottom component='h5' align="center" className='subtitulo'>As conexões, começam aqui.</Typography>
                        <br />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={3}>
                            <ModalPostagem />
                        </Box>
                        <Box marginRight={1}>
                            <ModalTema />
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;