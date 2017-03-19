using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication1
{
    public class BotDb
    {
        
        public static void InsertNewStudent(String connectionString)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                String first_name = "";
                String last_name = "";
                DateTime birthday = new DateTime();
                String gender = "";
                String languages = "";
                String details = "";
                String queryString = String.Format("INSERT INTO Student VALUES (({0}), ({1}), ({2}), ({3}), ({4}), ({5}), ({6}), ({7})",
                    new Random().Next(), first_name, last_name, birthday, gender, languages, details);

                SqlCommand command = new SqlCommand(queryString);
                connection.Open();
                try
                {
                    command.ExecuteNonQuery();
                }
                finally
                {
                    connection.Close();
                }
            }
        }

        public static void GetStudent(String connectionString, int pid)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                String queryString = String.Format("SELECT first_name, last_name, birthday, " + 
                    "gender, languages, details FROM Student WHERE pid={0}", pid);
                SqlCommand command = new SqlCommand(queryString);
                connection.Open();
                SqlDataReader reader;
                try
                {
                    reader = command.ExecuteReader();
                }
                finally
                {
                    connection.Close();
                }

                IDataRecord record;
                while(reader.Read())
                {
                    record = (IDataRecord)reader;
                }


            }
        }
    }
}