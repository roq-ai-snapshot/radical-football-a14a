import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['Academy Owner'];
  const roles = ['Parent', 'Academy Owner', 'Coach', 'Player'];
  const applicationName = `radical-football77`;
  const tenantName = `Academy`;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Academy Owner:
1. As an Academy Owner, I want to create an account for my soccer academy so that I can manage my academy's information and users.
2. As an Academy Owner, I want to invite coaches and players to join my academy so that they can access the platform and manage their profiles.
3. As an Academy Owner, I want to assign coaches to specific players so that they can intervene more efficiently in their development.
4. As an Academy Owner, I want to view and edit the information of my academy, coaches, and players so that I can keep everything up-to-date.

Coach:
1. As a Coach, I want to accept an invitation to join an academy so that I can access the platform and manage my profile.
2. As a Coach, I want to view the profiles of the players assigned to me so that I can better understand their development needs.
3. As a Coach, I want to update the progress and development of my assigned players so that the academy owner and parents can track their progress.
4. As a Coach, I want to view and edit my own profile information so that it remains accurate and up-to-date.

Player:
1. As a Player, I want to accept an invitation to join an academy so that I can access the platform and manage my profile.
2. As a Player, I want to view my own profile information, including my assigned coach, so that I can understand my development progress.
3. As a Player, I want to update my profile information, such as contact details and personal achievements, so that it remains accurate and up-to-date.

Parent:
1. As a Parent, I want to create an account so that I can access the platform and view my child's player profile.
2. As a Parent, I want to view my child's player profile, including their assigned coach and development progress, so that I can stay informed about their development.
3. As a Parent, I want to update my own contact information so that it remains accurate and up-to-date.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="30px" bottom="20px" zIndex={3}>
      <Popover placement="top-end">
        <PopoverTrigger>
          <IconButton
            aria-label="Help Info"
            icon={<FiInfo />}
            bg="blue.800"
            color="white"
            _hover={{ bg: 'blue.800' }}
            _active={{ bg: 'blue.800' }}
            _focus={{ bg: 'blue.800' }}
          />
        </PopoverTrigger>
        <PopoverContent w="50vw" h="70vh">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
