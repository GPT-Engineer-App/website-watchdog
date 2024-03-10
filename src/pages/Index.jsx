import React, { useState } from "react";
import { Box, Button, Container, VStack, HStack, Input, Heading, Text, Select, useToast, List, ListItem, IconButton, FormControl, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";
const sendEmail = (recipient, subject, body) => {
  return new Promise((resolve, reject) => {
    console.log(`Sending email to ${recipient} with subject: "${subject}" and body: "${body}"`);

    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const Index = () => {
  const [websiteList, setWebsiteList] = useState([]);
  const [newWebsite, setNewWebsite] = useState("");
  const [frequency, setFrequency] = useState(1);
  const [threshold, setThreshold] = useState(10);
  const [email, setEmail] = useState("");
  const toast = useToast();

  const addWebsite = () => {
    if (newWebsite) {
      const newSite = { url: newWebsite, frequency, threshold };
      sendEmail(email, "Tracking Service Started", `Hello to the tracking service, the "${newSite.url}" started a tracker with the following parameters: Frequency - ${newSite.frequency} requests per hour, Threshold - ${newSite.threshold} characters change.`)
        .then(() => console.log("Email sent successfully"))
        .catch((error) => {
          toast({
            title: "Email Sending Failed",
            description: "We were not able to send the email notification.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
      setWebsiteList([...websiteList, newSite]);
      toast({
        title: "Welcome to the Tracking Service",
        description: `Hello to the tracking service, the "${newSite.url}" started a tracker with the following parameters: Frequency - ${newSite.frequency} requests per hour, Threshold - ${newSite.threshold} characters change.`,
        status: "info",
        duration: 7000,
        isClosable: true,
      });
      setNewWebsite("");
      setFrequency(1);
      setThreshold(10);
    }
  };

  const removeWebsite = (url) => {
    setWebsiteList(websiteList.filter((website) => website.url !== url));
  };

  const handleSaveSettings = () => {
    sendEmail(email, "Monitoring Settings Saved", "Your monitoring settings have been saved successfully.")
      .then(() => console.log("Email sent successfully"))
      .catch((error) => {
        toast({
          title: "Email Sending Failed",
          description: "We were not able to send the email notification.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    // Normally you would send this data to your server here
    toast({
      title: "Settings Saved.",
      description: "Your monitoring settings have been saved successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={6}>
        <Heading as="h1">Website Monitoring Service</Heading>
        <FormControl id="email">
          <FormLabel>Email for Notifications</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" />
        </FormControl>
        <FormControl id="new-website">
          <FormLabel>Add Website</FormLabel>
          <InputGroup>
            <Input type="url" value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)} placeholder="Enter website URL" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={addWebsite}>
                <FaPlus />
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <HStack width="full">
          <FormControl id="frequency">
            <FormLabel>Frequency (Requests per Hour)</FormLabel>
            <Select value={frequency} onChange={(e) => setFrequency(parseInt(e.target.value, 10))}>
              {[...Array(4)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl id="threshold">
            <FormLabel>Change Sensitivity Threshold</FormLabel>
            <Input type="number" value={threshold} onChange={(e) => setThreshold(parseInt(e.target.value, 10))} min={0} />
          </FormControl>
        </HStack>
        <Button colorScheme="blue" onClick={handleSaveSettings}>
          Save Settings
        </Button>
        <Box width="full">
          <Heading as="h3" size="md">
            Tracked Websites
          </Heading>
          <List spacing={3}>
            {websiteList.map((website, index) => (
              <ListItem key={index}>
                <HStack justify="space-between">
                  <Text>{website.url}</Text>
                  <Text>Every {website.frequency} hour(s)</Text>
                  <Text>Threshold: {website.threshold} chars</Text>
                  <IconButton aria-label={`Remove ${website.url}`} icon={<FaTrash />} onClick={() => removeWebsite(website.url)} />
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
