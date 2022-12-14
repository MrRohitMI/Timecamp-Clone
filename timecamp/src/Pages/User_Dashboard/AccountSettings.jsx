import { Box, Button, Checkbox, Flex, Grid, GridItem, Heading, Image, Input, Link, Select, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { VscAccount } from 'react-icons/vsc';
import { VscDebugRestart } from 'react-icons/vsc';
import {AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import axios from "axios";
import Navbar from '../../Components/Dashboard/Navbar';
import Usermenu from '../../Components/Dashboard/UserMenu';
const AccountSettings = () => {
    const [show, setShow] =useState(false)
    const [value, setValue] =useState("");
     const [get, setGet]=useState(false);

    function change(){
       setShow(!show)
    }
    
    let token=(localStorage.getItem("userToken") ) || "";
    let [id,user,pass]=token.split(":");
    async function getData(){
        let res =await axios.get(`http://localhost:8080/users/${id}`,{headers:{ "token": token}});
        setGet(!get)
    }
    
    function changeUserName(value){
        //localStorage.setItem("token","63387a816d061c145a44452d:jonSnow@gmail.com:jon");
           axios.patch(`http://localhost:8080/users/${id}`,{"email":value},{headers:{ "token": token}})
        //    setGet(!get)
           setValue("");
           (localStorage.setItem("userToken",`${id}:${value}:${pass}`));
           setGet(!get)
           setShow(!show)
         }

    function getValue(e){
        setValue(e.target.value);
       
    }

    useEffect(()=>{
        getData()
    },[get]);
  return (
    <Grid templateColumns="15vw 85vw">
        <Box>
          <Sidebar />
        </Box>
        <Box>
        <Navbar />
        <Usermenu title="Tags" />
        <Grid  textAlign="left" marginLeft="30px" overflowY="scroll" h="85vh" templateColumns="repeat(2,1fr)">
            <Box>
            <Heading  size='lg' color="green" py={10}>Settings</Heading>
            <Box boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" paddingBottom="10px" paddingTop="10px">
                <Text marginTop="20px" fontWeight="500" px={5}>User Settings</Text>
                <Flex marginTop="30px" justifyContent="space-evenly">
                    <Box width="30%"><Image width="90%" height="160px" borderRadius="50%" src={require("../../Resources/profile_image_dummy.jpg")} /></Box>
                    <Box width="60%">
                        <Text fontSize="20px" marginTop="10px">{user}</Text>
                        <Link color='blue' onClick={change}>Change your email</Link>
                        {show && <Box> <Input type="text" onChange={getValue} value={value} /><Button onClick={()=>changeUserName(value)}>Change</Button></Box> }
                        <Flex marginTop="10px">
                            <Box marginTop="5px"><VscAccount /></Box>
                            <Box marginLeft="5px">Account Owner</Box>
                        </Flex>
                        <Flex marginTop="10px">
                            <Text>Role in:</Text>
                            <Link color='blue' href='#' marginLeft="5px">Administrator</Link>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            
            <Stack spacing={5}>
                <Text marginTop="20px">Full Name :</Text>
                <Input type="text" placholder="Enter Full Name" /><hr />
                <Box>
                    <Text>Language</Text>
                <Select marginTop="5px" variant='filled' placeholder='English'>
                    <option value='option1'>Polish</option>
                <option value='option2'>German</option>
                <option value='option3'>Spanish</option>
                <option value='option4'>French</option>
                </Select>
                </Box>
                

                <Box>
                    <Text>Theme :</Text>
                <Select marginTop="5px"  variant='filled' placeholder='Modern'>
                    <option value='option1'>Modern</option>
                <option value='option2'>Dark</option>
                <option value='option3'>Higher Contrast</option>
                </Select>
                </Box>
                
                <Box>
                    <Flex>
                    <Box>
                    Additional email:
                    </Box>
                    <Box marginTop="5px" fontSize="18px" marginLeft="5px" >
                    <AiOutlineQuestionCircle />
                    </Box>
                </Flex>
                <Input marginTop="5px"  type="text" placeholder="Additional email" />
                </Box>
                
                <Box>
                    <Flex>
                    <Box>
                    External User id:
                    </Box>
                    <Box marginTop="5px" fontSize="18px" marginLeft="5px" >
                    <AiOutlineQuestionCircle />
                    </Box>
                </Flex>
                <Input marginTop="5px"  type="text" placeholder="External id" />
                </Box>

                <Link color='blue' href='#'>Change Password</Link>
                <hr />
                <Text fontSize="18px">Time tracking permissions:</Text>
                <Stack spacing={2}>
                <Checkbox size='md' colorScheme='green'>Can track to all projects, tasks</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Can manage and see all invoices, rates, projects (Time Tracking Administrator)</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Can create new projects</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Can manage and see all invoices, rates</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Can add offline time</Checkbox>
                </Stack>
                <hr />
                <Text fontSize="18px">Time sheets:</Text>
                <Stack spacing={2}>
                <Checkbox size='md' colorScheme='green' defaultChecked>Autocomplete fields: duration and from-to</Checkbox>
                <Checkbox size='md' colorScheme='green'>Show graph representation of time entries on textual timesheet</Checkbox>
                </Stack>
            <hr />
                <Text fontSize="18px">Email notifications:</Text>
                <Stack spacing={2}>
                <Checkbox size='md' colorScheme='green' defaultChecked>Weekly computer-time team summary</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Alert when someone change my time entry</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Alert when I have time entries without a task</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Remind me to submit my timehseet for approval</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Alert when someone approve my timesheets</Checkbox>
                <Checkbox size='md' colorScheme='green' defaultChecked>Alert when 80% and 100% of the budget is exceeded</Checkbox>

                </Stack>
            </Stack>
        <Text fontSize="18px" marginTop="30px" marginBottom="30px">Your programming API token:</Text>
        <Flex>
            <Box>
                <Input width="400px" placeholder='7ca7ecb5e3ca94583691c9576b' />
            </Box>
            <Box>
                <Button>
                    <VscDebugRestart />
                </Button>
                </Box>
        </Flex>
        <hr/>
        <Flex marginTop="30px">
            <Button color="white" bgColor="green.400">
                Save settings
            </Button>
            <Button marginLeft="30px">
            Cancel
            </Button>
        </Flex>
            </Box>
            </Grid>
        </Box>
    </Grid>
   
  )
}
export default AccountSettings;