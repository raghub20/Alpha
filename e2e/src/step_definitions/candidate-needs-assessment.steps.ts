import { Given, Then, When, Before } from 'cucumber';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser, element, by, promise, until, protractor, Browser } from 'protractor';
import { Needsassessment } from './candidate-needs-assessment.page';

chai.use(chaiAsPromised);
const expect = chai.expect;

let needsassessment: Needsassessment;

Before(() => {
  needsassessment = new Needsassessment();
});

//1) Scenario: To validate all input fields for candidate needs assessment

Given('The candidate is on the needs assessment home page', async function () {
  return needsassessment.get();
});


Then('The candidate sees a mean to indicate if anyone else is relocating', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    return expect(needsassessment.relocatingYesOrNoField().isDisplayed()).to.eventually.be.true;
  });
});


Then('The candidate sees a mean to indicate number of relocating members', async function () {
  await needsassessment.relocatingYes().click().then(async () => {
    await needsassessment.nextButton().click().then(async () => {
      return expect(needsassessment.numberOfRelocatingMembers().isDisplayed()).to.eventually.be.true;
    });

  });
});


Then('The candidate sees a mean to input departure address', async function () {
  await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
    await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
      await needsassessment.oneRelocatingMembers().click().then(async () => {
        await needsassessment.nextButton().isDisplayed().then(async () => {
          await needsassessment.nextButton().isDisplayed().then(async () => {
            await needsassessment.nextButton().click().then(async () => {
              await needsassessment.departureAddressField().isDisplayed().then(async () => {
                return expect(needsassessment.departureAddressField().isDisplayed()).to.eventually.be.true;
              })
            });
          });
        });
      });
    });
  });
});



Then('The candidate sees a mean to input Destination State and City', async function () {
  await needsassessment.departureAddress().sendKeys("Test street").then(async () => {
    await needsassessment.departureAddressCity().sendKeys("Test city").then(async () => {
      await needsassessment.departureAddressState().sendKeys("Test state").then(async () => {
        await needsassessment.departureAddressPincode().sendKeys("12345").then(async () => {
          await needsassessment.nextButton().isDisplayed().then(async () => {
            await needsassessment.nextButton().click().then(async () => {
              await needsassessment.destinationAddressField().isDisplayed().then(async () => {
                return expect(needsassessment.destinationAddressField().isDisplayed()).to.eventually.be.true;
              });
            });
          });
        });
      });
    });
  });
});


Then('The candidate sees a mean to input Homeowner or Renter information', async function () {
  await needsassessment.destinationAddressdropdown().isDisplayed().then(async () => {
    await needsassessment.destinationAddressdropdown().click().then(async () => {
      await needsassessment.selectDestinationAddressField().isDisplayed().then(async () => {
        await needsassessment.selectDestinationAddressField().click().then(async () => {
          await needsassessment.nextButton().isDisplayed().then(async () => {
            await needsassessment.nextButton().click().then(async () => {
              await needsassessment.homeownerOrRenter().isDisplayed().then(async () => {
                return expect(needsassessment.homeownerOrRenter().isDisplayed()).to.eventually.be.true;
              })
            });
          });
        });
      });
    });
  })
})

Then('The candidate sees a mean to indicate type of home', async function () {
  await needsassessment.homeowner().isDisplayed().then(async () => {
    await needsassessment.homeowner().click().then(async () => {
      await needsassessment.nextButton().isDisplayed().then(async () => {
        await needsassessment.nextButton().click().then(async () => {
          await needsassessment.typeOfHome().isDisplayed().then(async () => {
            return expect(needsassessment.typeOfHome().isDisplayed()).to.eventually.be.true;
          })
        });
      });
    });
  });
});

Then('The candidate sees a mean to input # of Rooms', async function () {
  await needsassessment.apartment().isDisplayed().then(async () => {
    await needsassessment.apartment().click().then(async () => {
      await needsassessment.nextButton().isDisplayed().then(async () => {
        await needsassessment.nextButton().isDisplayed().then(async () => {
          await needsassessment.nextButton().click().then(async () => {
            await needsassessment.numberOfRooms().isDisplayed().then(async () => {
              await needsassessment.numberOfRooms().isDisplayed().then(async () => {
                return expect(needsassessment.numberOfRooms().isDisplayed()).to.eventually.be.true;
              });
            })
          })
        });
      });
    });
  });
});


//2) Scenario: To verify destination state and city is prepopulated


When('The candidate clicks on the Destination State and City', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await needsassessment.relocatingYes().isDisplayed().then(async () => {
      await needsassessment.relocatingYes().click().then(async () => {
        await needsassessment.nextButton().isDisplayed().then(async () => {
          await needsassessment.nextButton().click().then(async () => {
            await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
              await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
                await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
                await needsassessment.oneRelocatingMembers().click().then(async () => {
                  await needsassessment.nextButton().isDisplayed().then(async () => {
                    await needsassessment.nextButton().isDisplayed().then(async () => {
                      await needsassessment.nextButton().click().then(async () => {
                        await browser.sleep(2000);
                            await needsassessment.departureAddress().isDisplayed().then(async () => {
                              await needsassessment.departureAddress().sendKeys("test").then(async () => {
                                await needsassessment.departureAddressCity().sendKeys("test").then(async () => {
                                  await needsassessment.departureAddressState().sendKeys("test").then(async () => {
                                    await needsassessment.departureAddressPincode().sendKeys("test").then(async () => {
                                      await needsassessment.nextButton().isDisplayed().then(async () => {
                                        return await needsassessment.nextButton().click();
                                  });
                                });
                              });
                            })
                          });
                        });
                      });
                    });
                  });
                  })
                })
              })
            })
          })
        })
      })
    })
  })
});


Then('The candidate sees prepopulated list of State and City', async function () {
  await needsassessment.destinationAddressPrepopulate().isDisplayed().then(async () => {
    return expect(needsassessment.destinationAddressPrepopulate().isDisplayed()).to.eventually.be.true;
  });
});


//3) Scenario: To verify back arrow displays previous page and displays previously selected values


When('The candidate answers if anyone else is relocating', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
    await needsassessment.relocatingYes().isDisplayed().then(async () => {
    return needsassessment.relocatingYes().click();
    });
  });
});

When('The candidate moves to next and clicks back button', async function () {
  await browser.driver.manage().window().setSize(1400, 900).then(async () => {
  await needsassessment.nextButton().isDisplayed().then(async () => {
    await needsassessment.nextButton().click().then(async () => {
      await browser.sleep(2000);
      await needsassessment.backbutton().isDisplayed().then(async () => {
      await needsassessment.backbutton().isDisplayed().then(async () => {
        return needsassessment.backbutton().click();
      });
    });
      });
      });
    });
  });


Then('The candidate sees the previously selected values in if anyone else is relocating', async function () {
  await browser.sleep(2000);
  await needsassessment.relocatingYesEnabled().isDisplayed().then(async () => {
    return expect(needsassessment.relocatingYesEnabled().isDisplayed()).to.eventually.be.true;
  })
});

Then('The candidate answers number of relocating members', async function () {
  await needsassessment.nextButton().isDisplayed().then(async () => {
    await needsassessment.nextButton().click().then(async () => {
      await browser.sleep(2000);
      await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
      return needsassessment.oneRelocatingMembers().click();
      });
    });
  });
});

Then('The candidate sees the previously selected values in number of relocating members', async function () {
  await browser.sleep(2000);
  await needsassessment.oneRelocatingEnabled().isDisplayed().then(async () => {
  return expect(needsassessment.oneRelocatingEnabled().isDisplayed()).to.eventually.be.true;
  });
});


Then('The candidate answers departure address', async function () {
  await needsassessment.departureAddressField().sendKeys("123, First cross street");
  await needsassessment.departureAddressCity().sendKeys("Danbury");
  await needsassessment.departureAddressState().sendKeys("CT");
  return needsassessment.departureAddressPincode().sendKeys("01234");
});

Then('The candidate sees the previously selected values in departure address', function () {
  return //will be written once the screen comes
});


Then('The candidate answers Destination State and City', function () {
  return needsassessment.selectDestinationAddressField().click();
});

Then('The candidate sees the previously selected values in Destination State and City', function () {
  return //will be written once the screen comes
});


Then('The candidate answers Homeowner or Renter information', function () {
  return needsassessment.homeowner().click();
});

Then('The candidate sees the previously selected values in Homeowner or Renter information', function () {
  return expect(needsassessment.homeowner().isEnabled()).to.eventually.be.true;
});


Then('The candidate answers # of Rooms', function () {
  return needsassessment.tworooms().click();
});

Then('The candidate sees the previously selected values in # of Rooms', function () {
  return expect(needsassessment.tworooms().isEnabled()).to.eventually.be.true;
});


Then('The candidate answers type of home', async function () {
  await needsassessment.apartment().click();
});

Then('The candidate sees the previously selected values in type of home', function () {
  return expect(needsassessment.apartment().isEnabled()).to.eventually.be.true;
});

//4) Scenario: To validate all input fields for candidate needs assessment in mobile view


Then('The candidate sees a mean to indicate if anyone else is relocating in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    return expect(needsassessment.relocatingYesOrNoField().isDisplayed()).to.eventually.be.true;
  });
});


Then('The candidate sees a mean to indicate number of relocating members in mobile view', async function () {
  await needsassessment.relocatingYes().click().then(async () => {
    await needsassessment.nextButton().click().then(async () => {
      return expect(needsassessment.numberOfRelocatingMembers().isDisplayed()).to.eventually.be.true;
    });

  });
});


Then('The candidate sees a mean to input departure address in mobile view', async function () {
  await needsassessment.oneRelocatingMembers().isDisplayed().then(async () => {
    await needsassessment.oneRelocatingMembers().click().then(async () => {
      await needsassessment.nextButton().isDisplayed().then(async () => {
        await needsassessment.nextButton().click().then(async () => {
          await needsassessment.departureAddressField().isDisplayed().then(async () => {
            return expect(needsassessment.departureAddressField().isDisplayed()).to.eventually.be.true;
          });
        });
      })
    });
  });
});



Then('The candidate sees a mean to input Destination State and City in mobile view', async function () {
  await needsassessment.departureAddress().sendKeys("Test street").then(async () => {
    await needsassessment.departureAddressCity().sendKeys("Test city").then(async () => {
      await needsassessment.departureAddressState().sendKeys("Test state").then(async () => {
        await needsassessment.departureAddressPincode().sendKeys("12345").then(async () => {
          await needsassessment.nextButton().click().then(async () => {
            return expect(needsassessment.destinationAddressField().isDisplayed()).to.eventually.be.true;
          });
        });
      });
    });
  });
});


Then('The candidate sees a mean to input Homeowner or Renter information in mobile view', async function () {
  await needsassessment.destinationAddressdropdown().isDisplayed().then(async () => {
    await needsassessment.destinationAddressdropdown().click().then(async () => {
      await needsassessment.selectDestinationAddressField().isDisplayed().then(async () => {
        await needsassessment.selectDestinationAddressField().click().then(async () => {
          await needsassessment.nextButton().isDisplayed().then(async () => {
            await needsassessment.nextButton().click().then(async () => {
              await needsassessment.homeownerOrRenter().isDisplayed().then(async () => {
                return expect(needsassessment.homeownerOrRenter().isDisplayed()).to.eventually.be.true;
              })
            });
          });
        });
      });
    });
  })
})

Then('The candidate sees a mean to indicate type of home in mobile view', async function () {
  await needsassessment.homeowner().isDisplayed().then(async () => {
    await needsassessment.homeowner().click().then(async () => {
      await needsassessment.nextButton().isDisplayed().then(async () => {
        await needsassessment.nextButton().click().then(async () => {
          return;
          //return expect(needsassessment.typeOfHome().isDisplayed()).to.eventually.be.true;
        });
      });
    })
  });
});

Then('The candidate sees a mean to input # of Rooms in mobile view', async function () {
  await needsassessment.apartment().isDisplayed().then(async () => {
    await needsassessment.apartment().click().then(async () => {
      await needsassessment.nextButton().isDisplayed().then(async () => {
        await needsassessment.nextButton().click().then(async () => {
          await needsassessment.numberOfRooms().isDisplayed().then(async () => {
            return expect(needsassessment.numberOfRooms().isDisplayed()).to.eventually.be.true;
          })
        });
      });
    });
  });
});


//5) Scenario: To verify destination state and city is prepopulated in mobile view


When('The candidate clicks on the Destination State and City in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    return needsassessment.destinationAddressField().click();
  });
});


Then('The candidate sees prepopulated list of State and City in mobile view', function () {
  return expect(needsassessment.destinationAddressPrepopulate().isDisplayed()).to.eventually.be.true;
});


//6) Scenario: To verify back arrow displays previous page and displays previously selected values in mobile view


When('The candidate answers if anyone else is relocating in mobile view', async function () {
  await browser.driver.manage().window().setSize(500, 900).then(async () => {
    return needsassessment.relocatingYes().click();
  });
});

When('The candidate moves to next and clicks back button in mobile view', async function () {
  await needsassessment.nextButton().click();
  return needsassessment.backbutton().click();
});


Then('The candidate sees the previously selected values in if anyone else is relocating in mobile view', function () {
  return expect(needsassessment.relocatingYes().isEnabled()).to.eventually.be.true;
});

Then('The candidate answers number of relocating members in mobile view', function () {
  return needsassessment.oneRelocatingMembers().click();
});

Then('The candidate sees the previously selected values in number of relocating members in mobile view', function () {
  return expect(needsassessment.oneRelocatingMembers().isEnabled()).to.eventually.be.true;
});


Then('The candidate answers departure address in mobile view', async function () {
  await needsassessment.departureAddressField().sendKeys("123, First cross street");
  await needsassessment.departureAddressCity().sendKeys("Danbury");
  await needsassessment.departureAddressState().sendKeys("CT");
  return needsassessment.departureAddressPincode().sendKeys("01234");
});

Then('The candidate sees the previously selected values in departure address in mobile view', function () {
  return //will be written once the screen comes
});


Then('The candidate answers Destination State and City in mobile view', function () {
  return needsassessment.selectDestinationAddressField().click();
});

Then('The candidate sees the previously selected values in Destination State and City in mobile view', function () {
  return //will be written once the screen comes
});


Then('The candidate answers Homeowner or Renter information in mobile view', function () {
  return needsassessment.homeowner().click();
});

Then('The candidate sees the previously selected values in Homeowner or Renter information in mobile view', function () {
  return expect(needsassessment.homeowner().isEnabled()).to.eventually.be.true;
});


Then('The candidate answers # of Rooms in mobile view', function () {
  return needsassessment.tworooms().click();
});

Then('The candidate sees the previously selected values in # of Rooms in mobile view', function () {
  return expect(needsassessment.tworooms().isEnabled()).to.eventually.be.true;
});


Then('The candidate answers type of home in mobile view', async function () {
  await needsassessment.apartment().click();
});

Then('The candidate sees the previously selected values in type of home in mobile view', function () {
  return expect(needsassessment.apartment().isEnabled()).to.eventually.be.true;
});
