import React, { useState } from "react";
import { Box, Heading, List, ListItem, Divider, Tag, Flex, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaInbox, FaExclamationCircle, FaTrashAlt } from "react-icons/fa";

// Mock email data
const initialEmails = [
  { id: 1, subject: "Welcome to our service!", body: "Thank you for signing up...", label: null },
  { id: 2, subject: "Special offer just for you", body: "Don’t miss out on this exclusive deal...", label: null },
  { id: 3, subject: "Your order has been shipped", body: "Track your package here...", label: null },
  // ... more emails
];

const Index = () => {
  const [emails, setEmails] = useState(initialEmails);
  const toast = useToast();

  // Function to label an email
  const labelEmail = (emailId, label) => {
    const updatedEmails = emails.map((email) => {
      if (email.id === emailId) {
        return { ...email, label };
      }
      return email;
    });
    setEmails(updatedEmails);
    toast({
      title: `Email labeled as ${label}`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <Heading mb={4}>My Emails</Heading>
      <List spacing={3}>
        {emails.map((email) => (
          <ListItem key={email.id} p={3} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex justify="space-between" align="center">
              <Box>
                <Heading as="h3" size="md">
                  {email.subject}
                </Heading>
                <Box color="gray.600">{email.body}</Box>
              </Box>
              <Flex direction="column" align="center">
                {email.label && <Tag mb={2}>{email.label}</Tag>}
                <Box>
                  <IconButton icon={<FaInbox />} aria-label="Mark as low priority" m={1} onClick={() => labelEmail(email.id, "Low Priority")} />
                  <IconButton icon={<FaExclamationCircle />} aria-label="Mark as important" m={1} onClick={() => labelEmail(email.id, "Important")} />
                  <IconButton icon={<FaTrashAlt />} aria-label="Mark as spam" m={1} onClick={() => labelEmail(email.id, "Spam")} />
                </Box>
              </Flex>
            </Flex>
            <Divider mt={3} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
