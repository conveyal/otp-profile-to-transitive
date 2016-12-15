/* globals describe, expect, it */

const otpProfileToTransite = require('./index')

describe('otp-profile-to-transitive', () => {
  it('should transform response with no logical results', () => {
    const otpData = {
      externalMatches: 0,
      profile: [],
      ridepoolMatches: [],
      routes: [{
        id: '7:7',
        shortName: '302',
        longName: '302/G',
        mode: 'BUS',
        color: 'E64C00',
        agencyName: 'Regional Transportation Agency of Central Maryland'
      }],
      patterns: []
    }
    expect(otpProfileToTransite(otpData)).toEqual({
      journeys: [],
      patterns: [],
      places: [],
      routes: [],
      stops: [],
      streetEdges: []
    })
  })
})
