class CreateMyReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :my_reviews do |t|
      t.string :author
      t.string :title
      t.string :description
      t.integer :score

      t.timestamps
    end
  end
end
