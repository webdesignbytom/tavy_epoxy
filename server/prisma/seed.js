const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function seed() {

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
      password: '123',
      firstName: `Bob`,
      lastName: `Odin`,
    }
  })

  const firstDesign = await prisma.design.create({
    data: {
      userId: createdUser.id,
      title: 'First design',
      dimensions: [200, 200, 600],
      colours: ["red", "green"]
    }
  })
}
  // const adminUser = await prisma.user.create({
  //   data: {
  //     email: 'ADMIN@admin.com',
  //     password,
  //     role: 'ADMIN'
  //   }
  // })

  // console.log('users', createdUser, adminUser)

//   const createdProfile = await prisma.profile.create({
//     data: {
//       userId: createdUser.id,
//       firstName: 'Test',
//       lastName: 'Test'
//     }
//   })

//   const adminProfile = await prisma.profile.create({
//     data: {
//       userId: adminUser.id,
//       firstName: 'Admin',
//       lastName: 'Boolean'
//     }
//   })

//   console.log('profiles', createdProfile, adminProfile)

//   const createdPost = await prisma.post.create({
//     data: {
//       content: "I'm losing my patience creating a DB",
//       userId: createdUser.id
//     }
//   })

//   const adminPost = await prisma.post.create({
//     data: {
//       content: 'This students are driving me crazy!',
//       userId: adminUser.id
//     }
//   })

//   console.log('posts created', createdPost, adminPost)
// }

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
