/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, Typography, Grid } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Mech from '../public/gruntz_mech.jpg'
import Cover from '../public/Cover2.png'


export default function Home() {

  return (
    <>
      <Head>
        <title>Iron Hearts Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container>
          <Grid item xs={6}>
            <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
              <Image 
                src={Cover}
                alt="IH-Cover"
                fill
                object-fit="cover"
                objectPosition="center"
              />
            </div>
          </Grid>
          <Grid item xs={6} container justifyContent="center" alignItems="center" sx={{ zIndex: 1, p: 5 }}>
            <Typography variant="h6" align="center">
                <p>Iron Hearts is a mix of Mash, Mobile Suit Gundam, and Game of Thrones with themes of the American Revolution.</p><br/>
                <p>It is a tale of humanity in all of its glory, compassion, and horror. Told from the perspective of both sides of the conflict, the lines between wright and wrong, truth and lies, and the very notion of "Enemy" become blurred.</p><br/>
                <p>For over 300 years, Earth has been globalized and has expanded into space. As humanity grew in numbers and resources became scarce, the Earth Federation established colonies outside of Earth's sphere to address the pressing need for raw materials. The colonies provided the necessary resources that were scarce on our homeworld, while the Earth Federation maintained control over the food supply. However, as the colonies grew and developed their own unique identities and cultures, the cohesiveness and unity of humanity began to diminish.</p><br/>
                <p>Gama 3 was a penal colony for conscripted Mars rebels that mined essential raw minerals. After 20 years, the conscripts were freed, but the colony's productivity declined due to strong solar winds. The Earth Federation responded by limiting food shipments, increasing tensions. With many former rebels among them, the colony renamed itself to Liberty, declared independence and stopped all shipments. Now, the Federation is sending battleships to reclaim their assets, and Liberty is preparing to defend themselves.</p><br/>
                {/* <p>Gama 3, once a penal colony for conscripted Mars rebels, was established by redirecting an asteroid's orbit to provide Earth with essential raw and rare minerals. After 20 years, the conscripts had served their sentences and were freed. However, the colony's productivity was hampered by strong solar winds, causing them to miss numerous quotas. As a result, the Earth Federation began to restrict food shipments to the colony, exacerbating existing tensions. Given that many of the colonists were originally conscripted from a failed Mars rebellion, Liberty declared its independence and ceased all shipments to Earth. Now, a year has passed since the strike began, and the Earth Federation has sent three advanced battleships to reclaim its assets. In preparation for the invasion, the Liberty colonists have been fortifying their colony and improvising weapons to defend themselves.</p><br/> */}
            </Typography>
          </Grid> 
          <Grid item xs={6} container justifyContent="center" alignItems="center" sx={{ zIndex: 1, p: 5 }}>
            <Typography variant="h6" align="center">
              <ul>
                "The fight between us and the Earth Federation is not just about resources, but about our right to live free and with dignity. We will not let them control us and oppress our people. This is a battle for our independence and the future of our colony. We will stand firm and fight for our cause, for we are the defenders of our own destiny."                <br/><span> - General Mavernic LMCF </span>
              </ul>
              <br/><br/>
              <ul>
                "The Liberty Mining Colony rebels have been a regrettable consequence of our investment in their society. We provided the resources and support necessary for their growth, yet they failed to meet their obligations to the Earth Federation. This left us with no choice but to take action to protect our interests and maintain the delicate balance of power in the solar system. The rebels must understand that their actions have consequences, and we will not hesitate to use our military might to uphold our authority."                <br/><span> - General Holton EFSF </span>
              </ul>
              <br/><br/>
              <ul>
                "Young blood, listen up. War is a bitter pill to swallow, and you can't afford to be blinded by its glory. When you have things to do in front of you, you can't waste time worrying about what might come. I've been there, fought hard for what I believed in, and lost. It's not easy, and it's not something you can forget. But you gotta keep going, keep living, and keep doing what needs to be done. Your duty is to the present, not to the past or the future. You wanna be a warrior? Fine, but remember that your responsibility is not just to fight, but to live and to build something worth fighting for. Don't forget that."                
                <br/><span> - John </span>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '100%' }}>
                <Image 
                  src={Mech}
                  alt="IH-Mech"
                  fill
                  object-fit="cover"
                  objectPosition="center"
                />
            </div>
          </Grid>
        </Grid>
      </main>
    </>
  )
}
