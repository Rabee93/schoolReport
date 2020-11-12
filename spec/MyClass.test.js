let Report = require ('../src/Myclass.js')

describe ('Report', function(){
  it('has reports', function(){

  })
  describe ('green',function(){
    it('shows you how many greens do you have', function(){
      let report = new Report()
      expect(report.green).toEqual(0)
    })

  })
  describe('red',function (){
    it('shows you how many reds do you have', function(){
    let report = new Report()
    expect(report.red).toEqual(0)

  })
  })
  describe('amber',function (){
    it('shows you how many ambers do you have', function(){
    let report = new Report()
    expect(report.amber).toEqual(0)
  })
  })
  describe('addValues',function (){
    it('incruments the values', function(){
    let report = new Report()
    report.addValues('green,red,amber,green,green,red')
    expect(report.green).toEqual(3)
    expect(report.red).toEqual(2)
    expect(report.amber).toEqual(1)
  })
  })
  describe('showReport',function (){
    it('shows the final report', function(){
    let report = new Report()
    report.addValues('green,red,amber,green,green,red')
    expect(report.showReport()).toEqual('green = 3, red = 2, amber = 1')

  })
  })
})
