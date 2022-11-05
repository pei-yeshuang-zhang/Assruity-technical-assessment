import request from 'supertest'

const url =
  'https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false'

describe('sample test', () => {
  it('test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Endpoint Test', () => {
  it('should return a 200 status code', async () => {
    const res = await request(url).get('/')
    expect(res.statusCode).toBe(200)
  })
})

describe('Get name', () => {
  it('should test Name === Badges', async () => {
    const res = await request(url).get('/')
    expect(res.body.Name).toBe('Badges')
  })
})

describe('Get CanRelist', () => {
  it('should test CanRelist === true', async () => {
    const res = await request(url).get('/')
    expect(res.body.CanRelist).toBeTruthy()
  })
})
