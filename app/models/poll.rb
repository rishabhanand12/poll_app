class Poll < ApplicationRecord
  has_many :option
  has_many :vote
  belongs_to :user
  attribute :total_polls_count, :integer, default: 0

  def show_options
    options = []
    options << { option_id: self.option[0][:id], option: self.option[0][:option] }
    options << { option_id: self.option[1][:id], option: self.option[1][:option] }
    options << { option_id: self.option[2][:id], option: self.option[2][:option] }
    options << { option_id: self.option[3][:id], option: self.option[3][:option] }
    # return options
  end
end
