import React from 'react'; import { Card, CardContent } from '@/components/ui/card'; import { Button } from '@/components/ui/button'; import { motion } from 'framer-motion';

const Home = () => { return ( 

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="max-w-4xl w-full"> 

Fresh Harvest

ჩვენ ვუზრუნველყოფთ მაღალი ხარისხის მწვანილებსა და მიკრომწვანილებს მთელი წლის განმავლობაში!

<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> <Card className="bg-white shadow-xl rounded-2xl"> <CardContent> <h2 className="text-xl font-bold text-green-700">ჩვენი პროდუქტები</h2> <ul className="list-disc ml-5 mt-3 text-gray-600"> <li>სალათის ფურცლები</li> <li>რუკოლა</li> <li>მიკრომწვანილები</li> <li>წითელი ფხალი</li> <li>პრასი</li> </ul> </CardContent> </Card> <Card className="bg-white shadow-xl rounded-2xl"> <CardContent> <h2 className="text-xl font-bold text-green-700">რატომ ავირჩიოთ ჩვენ?</h2> <p className="text-gray-600 mt-3"> - მაღალი ხარისხი და მუდმივი მიწოდება მთელი წლის განმავლობაში.<br /> - სტაბილური ფასები და გამორჩეული მომსახურება.<br /> - ახალი პროდუქტები მუდმივად ემატება ასორტიმენტს. </p> </CardContent> </Card> </div> <div className="mt-8 text-center"> <Button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">დაგვიკავშირდით</Button> </div> </motion.div> </div> 

); };

export default Home;
