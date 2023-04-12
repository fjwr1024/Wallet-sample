import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { useQueryUser } from '@/hooks/useQueryUser';

const Page: NextPage = () => {
  const { useQueryUserData } = useQueryUser();
  const { data: user } = useQueryUserData();
  return (
    <Fragment>
      <Head>
        <title>example</title>
      </Head>
      <main>
        <p>example get user list</p>
        <Box>
          <UnorderedList>
            {user &&
              Object.entries(user).map(([key, value]) => (
                <ListItem key={key}>
                  {key}: {value === null ? 'N/A' : value.toString()}
                </ListItem>
              ))}
          </UnorderedList>
        </Box>
      </main>
    </Fragment>
  );
};

export default Page;
