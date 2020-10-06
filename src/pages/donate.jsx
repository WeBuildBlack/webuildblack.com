import React, { useState } from 'react'
import Helmet from 'react-helmet'

export default function Donate() {
  const [isRecurring, setIsRecurring] = useState(true)
  const [donationFrequency, setDonationFrequency] = useState('monthly')

  // return (
  //   <Layout>
  //     <Helmet title="Donate | We Build Black"></Helmet>
  //     <div className="relative bg-white flex">
  //       <MediaBox
  //         image={man4}
  //         color={'black'}
  //         addlClasses={'hidden w-2/5 px-5pc md:inline lg:px-20pc'}
  //       />
  //       <div className="w-full md:w-3/5 self-end">
  //         <MediaBox image={texture} addlClasses={'w-full px-6 py-6r self-end'}>
  //           <div className="w-full h-full mx-auto px-0 md:px-4 lg:px-4r max-w-4xl">
  //             <h2 className="text-black-900 mb-4">Donate to We Build Black</h2>
  //             <p className="mb-4r text-yellow-600 uppercase font-black shadow">
  //               Enter your donation amount
  //             </p>
  //             <div className="w-full flex-wrap xl:flex-no-wrap lg:flex">
  //               <span className="w-full flex mb-6">
  //                 <h2 className="text-black-900 my-2 mr-2">$</h2>
  //                 <Input input={true} placeholder={'Ex. 50'} addlClasses={''} />
  //               </span>
  //               <span className="flex w-full xl:w-2/5 justify-evenly items-center">
  //                 <InputWrap addlClasses={'w-1/2 mb-6 mr-4 xl:w-auto xl:mx-4'}>
  //                   <button
  //                     onClick={() => setIsRecurring(!isRecurring)}
  //                     className={
  //                       isRecurring
  //                         ? `${activeBtn} ${standardBtn}`
  //                         : standardBtn
  //                     }
  //                   >
  //                     Recurring
  //                   </button>
  //                 </InputWrap>
  //                 <InputWrap addlClasses={'w-1/2 mb-6 xl:w-auto'}>
  //                   <button
  //                     onClick={() => setIsRecurring(!isRecurring)}
  //                     className={
  //                       !isRecurring
  //                         ? `${activeBtn} ${standardBtn}`
  //                         : standardBtn
  //                     }
  //                   >
  //                     One Time
  //                   </button>
  //                 </InputWrap>
  //               </span>
  //             </div>
  //             {isRecurring ? (
  //               <RadioGroup
  //                 donationFrequency={donationFrequency}
  //                 setDonationFrequency={setDonationFrequency}
  //               />
  //             ) : null}
  //             <Input
  //               input={false}
  //               placeholder={
  //                 "Enter where you'd like to see your dollars go (optional)"
  //               }
  //             />
  //             <div className="mt-8 w-full flex justify-center items-center">
  //               <Button color={'teal'} shade={500}>
  //                 Donate
  //               </Button>
  //             </div>
  //           </div>
  //         </MediaBox>
  //       </div>
  //     </div>
  //   </Layout>
  // )
  return <h1>Donate</h1>
}
