import { Box, Divider, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const CustomDivider = ({ children }: Props) => {
	return (
		<Flex gap={6} alignItems={'center'} my={2}>
			<Divider flex={'0 1 auto'} />
			<Box flex={'1 0 auto'} fontWeight={'bold'}>
				{children}
			</Box>
			<Divider flex={'0 1 auto'} />
		</Flex>
	);
};

export default CustomDivider;
