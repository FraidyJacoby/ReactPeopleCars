using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ReactPeopleCars.Data
{
    public class PeopleCarsRepository
    {
        private string _connectionString;

        public PeopleCarsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using (var ctx = new PeopleCarsContext(_connectionString))
            {
                return ctx.People.Include(p => p.Cars).ToList();
            }
        }

        public void AddPerson(Person person)
        {
            using(var ctx = new PeopleCarsContext(_connectionString))
            {
                ctx.People.Add(person);
                ctx.SaveChanges();
            }
        }

        public void AddCar(Car car)
        {
            using(var ctx = new PeopleCarsContext(_connectionString))
            {
                ctx.Cars.Add(car);
                ctx.SaveChanges();
            }
        }

        public List<Car> GetCars(int personId)
        {
            using(var ctx = new PeopleCarsContext(_connectionString))
            {
                return ctx.Cars.Where(c => c.PersonId == personId).ToList(); ;
            }
        }

        public void DeleteCars(int personId)
        {
            using(var ctx = new PeopleCarsContext(_connectionString))
            {
                ctx.Database.ExecuteSqlInterpolated($"DELETE FROM Cars WHERE PersonId = {personId}");
                ctx.SaveChanges();
            }
        }
    }
}
