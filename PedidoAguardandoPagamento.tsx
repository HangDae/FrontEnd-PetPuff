import { HiOutlineUser } from "react-icons/hi";
import styles from "./page.module.css";
import { Button, Flex, Text, Image, Spacer, IconButton, Stack, Box, ButtonGroup, Wrap, WrapItem } from "@chakra-ui/react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavBar } from "@/components/navbar";
import Link from "next/link";

export default function PedidoAguardandoPagamento() {
  return (
    <main className={styles.main}>
      <NavBar />

      <Stack spacing={10} direction='row' align='left'>
        <Stack spacing={2} direction='column' align='left'>
          <Text fontSize='16px' color='tomato'>
            Orçamentos
          </Text>
          <Button 
            height='20px'
            width='65px' 
            colorScheme='Gray' 
            variant='link'
          >
            Pedidos
          </Button>
          <Button colorScheme='Gray' variant='link'>
            Meus dados
          </Button>
        </Stack>
        <Stack spacing={5} direction='column' align='left'>
          <Text fontSize='10px' color='Blue'>
            Lista de Orçamentos
          </Text>
          <Wrap spacing={10}>
            <WrapItem>
            <Box w='100%' alignItems='center'>
                Número do Pedido
              <br />
                P-082917
              </Box>
            </WrapItem>
            <WrapItem>
            <Box w='100%' alignItems='center'>
                Status
              <br />
              <Box bg='lightcyan'>
                Pagameto Pendente
              </Box>
              </Box>
            </WrapItem>
            <WrapItem>
            <Box w='100%' alignItems='center'>
                Data do Pedido
                <br />
                01/10/2024
              </Box>
            </WrapItem>
            <WrapItem>
            <Box w='100%' alignItems='center'>
                Data de Entrega
              <br />
                -
              </Box>
            </WrapItem>
            <WrapItem>
            <Box w='100%' alignItems='center'>
                Valor
              <br />
                R$ 66,30
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg='lightgray' w='100%' alignItems='center'>
                  Orçamento
                <br />
                  Q-082917
              </Box>
            </WrapItem>
          </Wrap>
          <Box fontSize='2xl'>
            Dragonilda Fofinha 
            <Wrap spacing={15}>
              <WrapItem>
                <Image boxSize='200px' src='https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-cartoon-colorful-baby-dragon-png-image_13237225.png' alt='Dragonilda Fofinha' />
              </WrapItem>
              <WrapItem>
                <Box>
                  <Text fontSize='lg'>Tamanho: </Text>
                  <Text fontSize='sm'>P (20 cm de altura) </Text>
                  <br />
                  <Text fontSize='lg'>Kit de Materiais: </Text>
                  <Text fontSize='md'>Kit 1 </Text>
                  <Text fontSize='xs'>- Pele em lã </Text>
                  <Text fontSize='xs'>- Preenchimento de espuma sustentável</Text>
                  <Text fontSize='xs'>- Acabamentos foscos</Text>
                  <br />
                  <Text fontSize='lg'>Detalhes: </Text>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box fontSize='xs' color='red'>
                  <Wrap spacing={30}>
                    <WrapItem>
                      <Box fontSize='xs' color='black'>
                        Prazo de confecção
                        <br />
                        12 dias
                      </Box>
                    </WrapItem>
                    <WrapItem>
                      <Box fontSize='xs' color='black'>
                        Previsão de Postagem
                        <br />
                          13/10/2024
                      </Box>
                    </WrapItem>
                  </Wrap>
                  A pelúcia começara a ser produzida assim que o pagamento for comfirmado.
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
