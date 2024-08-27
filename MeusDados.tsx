import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function MeusDados() {
  const cpf = '13234324253'
  const nome = 'Fulano'
  const sobrenome = 'De Tal'
  const email = 'fulano@gmail.com'
  const cel = '93298359'
  const cep = '748375454'
  const cidade = 'Lugar Nenhum'
  const estado = 'ES'
  const logradouro = 'Eu não sei o que é isso'
  const num = '00'
  const bairro = 'nada, nemo, nihil'
  const com = 'Onde judas bateu as botas'

  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={100} direction='row' align='left'>
        <Stack spacing={2} direction='column' align='left'>
          <Button colorScheme='Gray' variant='link'>
            Orçamentos
          </Button>
          <Button 
            height='20px'
            width='65px' 
            colorScheme='Gray' 
            variant='link'
          >
            Pedidos
          </Button>
          <Text fontSize='16px' color='tomato'>
            Meus dados
          </Text>
        </Stack>
        <Text></Text> 
        <Stack spacing={5} direction='column' align='left'>
          <Text fontSize='2xl'>
            Dados Fiscais
          </Text>
          <Stack spacing={15} direction='row' align='left'>
            <Box>
              CPF: {cpf}
              <br />
              Nome: {nome}
              <br />
              Sobrenome: {sobrenome}
              <br />
              Email: {email}
              <br />
              Celular: {cel}
            </Box>
            <Box>
              CEP: {cep}
              <br />
              Cidade: {cidade}
              <br />
              Estado: {estado}
              <br />
              Lougradouro: {logradouro}
              <br />
              Número: {num}
              <br />
              Bairro: {bairro}
              <br />
              Complemento: {com}
            </Box>
          </Stack>
          <Button colorScheme='blue'>
            Editar
          </Button>
        </Stack>
        <Text></Text> 
        <Text></Text> 
      </Stack>
    </main>
  );
}