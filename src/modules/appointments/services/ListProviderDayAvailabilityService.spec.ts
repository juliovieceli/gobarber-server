import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderDayAvailability: ListProviderDayAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availabilty from provider', async () => {
    /*     const user2 = await fakeUsersRepository.create({
      name: 'John tre',
      email: 'johntre@example.com',
      password: '123456',
    }); */
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 15, 16, 0, 0),
    });
    await fakeAppointmentsRepository.create({
      provider_id: 'provider-id',
      user_id: 'user',
      date: new Date(2020, 9, 15, 14, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 9, 15, 11).getTime();
    });

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'provider-id',
      year: 2020,
      month: 10,
      day: 15,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 11, available: false },
        { hour: 12, available: true },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: true },
        { hour: 16, available: false },
      ]),
    );
  });
});
