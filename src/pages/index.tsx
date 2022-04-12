import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
	Button,
	Flex,
	Grid,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Text,
} from '@chakra-ui/react';
import CustomDivider from 'components/CustomDivider';
import GithubLogo from 'components/ui/GithubLogo';
import Logo from 'components/ui/Logo';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handlePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};

	return (
		<Grid
			as={'main'}
			height={'100vh'}
			templateColumns={'1fr 480px 480px 1fr'}
			templateRows={'1fr 480px 1fr'}
			templateAreas={"'. . . .' '. logo form .' '. . . .'"}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Flex
				gridArea={'logo'}
				flexDir={'column'}
				alignItems={'flex-start'}
				gap={10}
			>
				<Logo />

				<Heading as={'h1'} size={'2xl'} lineHeight={'shorter'}>
					Faça login na plataforma
				</Heading>
			</Flex>

			<Flex
				height={'100%'}
				gridArea={'form'}
				flexDir={'column'}
				alignItems={'stretch'}
				justifyContent={'center'}
				gap={2}
				backgroundColor={'gray.700'}
				borderRadius={'md'}
				padding={16}
			>
				<InputGroup as={Flex} alignItems={'center'}>
					<InputLeftElement height={'50px'} pointerEvents={'none'}>
						<EmailIcon fontSize={'xl'} color={'purple.500'} />
					</InputLeftElement>
					<Input
						height={'50px'}
						backgroundColor={'gray.800'}
						focusBorderColor={'purple.500'}
						borderRadius={'sm'}
						placeholder={'E-mail'}
					/>
				</InputGroup>

				<InputGroup as={Flex} alignItems={'center'}>
					<InputLeftElement height={'50px'} pointerEvents={'none'}>
						<LockIcon fontSize={'xl'} color={'purple.500'} />
					</InputLeftElement>
					<Input
						type={isPasswordVisible ? 'text' : 'password'}
						height={'50px'}
						backgroundColor={'gray.800'}
						focusBorderColor={'purple.500'}
						borderRadius={'sm'}
						placeholder={'Password'}
					/>
					<InputRightElement
						cursor={'pointer'}
						height={'50px'}
						onClick={handlePasswordVisibility}
					>
						{isPasswordVisible ? (
							<ViewOffIcon fontSize={'xl'} color={'purple.500'} />
						) : (
							<ViewIcon fontSize={'xl'} color={'purple.500'} />
						)}
					</InputRightElement>
				</InputGroup>

				<Link
					alignSelf={'flex-start'}
					fontSize={'sm'}
					color={'purple.600'}
					_hover={{
						color: 'purple.500',
					}}
					fontWeight={'bold'}
				>
					Esqueci a minha password
				</Link>

				<Button
					textTransform={'uppercase'}
					mt={2}
					backgroundColor={'purple.500'}
					height={'50px'}
					borderRadius={'sm'}
					_hover={{ backgroundColor: 'purple.700' }}
				>
					Entrar
				</Button>

				<Text
					textAlign={'center'}
					fontSize={'sm'}
					color={'gray.300'}
					mt={2}
				>
					Não tem uma conta?{' '}
					<Link
						alignSelf={'flex-start'}
						fontSize={'sm'}
						color={'purple.600'}
						_hover={{
							color: 'purple.500',
						}}
						fontWeight={'bold'}
					>
						Criar Conta
					</Link>
				</Text>

				<CustomDivider>Ou entre com</CustomDivider>

				<Flex alignItems={'center'} justifyContent={'center'}>
					<Button
						textTransform={'uppercase'}
						backgroundColor={'gray.600'}
						width={'100%'}
						height={'50px'}
						borderRadius={'sm'}
						_hover={{
							backgroundColor: 'purple.500',
							'&>svg': {
								color: 'white',
							},
						}}
						gap={2}
					>
						<GithubLogo fontSize={'2xl'} color={'purple.500'} />
						Github
					</Button>
				</Flex>
			</Flex>
		</Grid>
	);
};

export default Home;
